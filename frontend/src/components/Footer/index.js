import React from 'react';
import WIP from '../../components/WIP';
import './style.scss';

class Footer extends React.Component {
  render(){
    return (
      <div className='footer-root'>
        <hr className='horizontal-line'/>
        <p className='footer-info'>
          This website is licensed under <a href='https://www.gnu.org/licenses/gpl-3.0.html' target='_blank'>GPL v3</a>. 
          <br/>
          Source code can be found on <a href='https://github.com/fjp321/inst377-final' target='_blank'>github</a>.
        </p>
      </div>
    );
  }
}

export default Footer;
