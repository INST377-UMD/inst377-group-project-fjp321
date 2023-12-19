import React from 'react';
import axios from 'axios';

class CveViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  updateGroup() {
    axios.get('http://localhost:3000/'+this.props.group)
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  componentDidUpdate() {
    this.updateGroup();
  }

  render() {
    return (
      <div className='cve-view-root'>
        <table>
          <thead>
            <tr>
              <th>CVE ID</th>
              <th>Status</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data && this.state.data.map(item => (
              <tr key={item.id}>
                <td><a href={`https://nvd.nist.gov/vuln/detail/${item.id}`} target='_blank'>{item.id}</a></td>
                {(() => {
                  if (item.status === 'Analyzed') {
                    return <td className='cve-view-check'></td>;
                  } else {
                    return <td className='cve-view-question'></td>;
                  }
                })()}
                <td>{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CveViewer;
