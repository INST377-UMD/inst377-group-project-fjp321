import React from 'react';
import WIP from '../components/WIP';
import Player from '../components/Player';
import Weather from '../components/Weather';
import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className='home-root'>
        <div className='player-parent'>
          <Player parent='home'/>
        </div>
        <div className='weather-parent'>
          <Weather parent='home'/>
        </div>
        <div className='threat-feed-parent'>
          <WIP parent='home'/>
        </div>
      </div>
    );
  }
}

export default Home;
