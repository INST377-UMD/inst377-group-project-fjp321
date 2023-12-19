const express = require('express');
const axios = require('axios');

class DataUpdater {
	constructor() {
		this.apiEndpoint = 'https://services.nvd.nist.gov/rest/json/cves/2.0?noRejected&isVulnerable&cpeName=';
		this.CPEs = ['cpe:2.3:a:gitlab:gitlab:8.5.0:*:*:*:*:*:*:*','cpe:2.3:a:github:github:3.0.0:*:*:*:*:*:*:*','cpe:2.3:a:home-assistant:home-assistant:2022.03:*:*:*:*:*:*:*','cpe:2.3:a:kubernetes:kubernetes:1.6.5:*:*:*:*:*:*:*','cpe:2.3:a:matrix:synapse:3.0.0:*:*:*:*:*:*:*'];
		this.CPEshort = ['gitlab','github','home-assistant','kubernetes','synapse'];
		this.updateInterval = 12*60*60*1000;
		this.data = {};
		this.fetchDataAndUpdate();
		setInterval(() => this.fetchDataAndUpdate(), this.updateInterval);
	}
	
	sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}
	
	async fetchDataAndUpdate() {
		try {
			for (let index in this.CPEs) {
				const response = await axios.get(this.apiEndpoint + this.CPEs[index]);
				this.data[this.CPEshort[index]] = response.data.vulnerabilities.map(obj => {
					return {
						id: obj.cve.id,
						description: obj.cve.descriptions[0].value 
					};
				});
				await this.sleep(1000);
			}
			console.log('Data updated successfully.');
		} catch (error) {
			console.error('Error fetching data:', error.message);
		}
	}
}
	
class APIServer {
	constructor(port, dataUpdater) {
		this.port = port;
		this.dataUpdater = dataUpdater;
		this.app = express();
		this.app.get('/data', (req, res) => {
			res.json(this.dataUpdater.data);
		});
	}
	
	start() {
		this.app.listen(this.port, () => {
			console.log(`Server is running on port ${this.port}`);
		});
	}
}

const dataUpdater = new DataUpdater();
const apiServer = new APIServer(3000, dataUpdater);
apiServer.start();
