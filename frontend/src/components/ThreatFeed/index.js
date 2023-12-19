import React from 'react';
import axios from 'axios';
import CveViewer from './CveViewer.js';
import './style.scss';

class ThreatFeed extends React.Component {
  constructor(){
    super();
    this.state = {
      currentGroup: null,
      cveList: [],
    };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(groupId) {
    const currentElement = document.getElementById(groupId);
    const previousElement = document.getElementById(this.state.currentGroup);
    currentElement.className = 'active-li';
    if(previousElement){
      previousElement.className = '';
    }
    this.setState({ currentGroup: groupId });
  }

  componentDidMount() {
    axios.get('http://localhost:3000/options')
      .then(response => {
        this.setState({cveList: response.data})
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  render() {
    return (
      <div className='tf-root'>
        <div className='tf-navbar-root'>
          <ul className='tf-navbar-list'>
            {this.state.cveList.map(item => (
              <li key={item} id={item} onClick={this.handleItemClick.bind(this,item)}>{item}</li>
            ))}
          </ul>
        </div>
        <CveViewer group={this.state.currentGroup}/>
      </div>
    );
  }
}

export default ThreatFeed;
