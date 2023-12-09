import React from 'react';
import Card from '../components/Card';
import './About.scss';

class About extends React.Component {
  render() {
    return (
      <div className='about-root'>
        <div className='about-site'>
          <h1 className='about-content'>About This Site</h1>
          <p className='about-content'>This site is created to be a dashboard site where users can go to digest information about CVEs and the weather, as well as take in some tunes!</p>
          <h2 className='about-content'>Features</h2>
          <p className='about-content'>Spotify integration</p>
          <p className='about-content'>Geolocation and weather data</p>
          <p className='about-content'>CVE search and display</p>
        </div>
        <div className='contrib'>
          <h2 className='contrib-header'>Contributors</h2>
          <Card name='fjp' github_user='fjp321'/>
          <Card name='2Aneeb' github_user='2Aneeb'/>
        </div>
      </div>
    );
  }
}

export default About;
