import React from 'react';
import './style.scss';

class Card extends React.Component {
  render() {
    return (
      <div className='card-root'>
        <p>
          {this.props.name}
        </p>
        <p>
          <a href={`https://github.com/${this.props.github_user}`} target='_blank' className='card-icon'></a>
        </p>
      </div>
    );
  }
}

export default Card;
