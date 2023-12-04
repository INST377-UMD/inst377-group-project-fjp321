import React from 'react';
import './style.scss';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlistURI: '5bnNwJvUAcd4fkdfQaTMKC',
      iframeKey: Date.now(),
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({
      playlistURI: event.target.playlist_uri_input.value,
      iframeKey: Date.now(),
    });
  };

  render() {
    return (
      <div className='player-root'>
        <form className='playlist-uri' onSubmit={this.handleSubmit}>
          <label>
            Enter Spotify Playlist URI:
            <input type='text' name='playlist_uri_input'/>
          </label>
          <button type='submit'>submit</button>
        </form>
        <br/>
        <iframe 
          key={this.state.iframeKey}
          src={`https://open.spotify.com/embed/playlist/${this.state.playlistURI}?utm_source=generator`}
          width='100%' 
          height='152' 
          frameBorder='0' 
          allowFullScreen='' 
          allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' 
          loading='lazy'
        ></iframe>
      </div>
    );
  }
}

export default Player;
