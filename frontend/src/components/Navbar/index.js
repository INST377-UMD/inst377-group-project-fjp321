import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss'

class Navbar extends React.Component {
  render() {
    return (
      <div className='navbar-root'>
        <ul className="navbar-list">
          <li className="navbar-item">
            <NavLink to="/home" className="nav-link" activeclassname="active">
              Home
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/about" className="nav-link" activeclassname="active">
              About
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/help" className="nav-link" activeclassname="active">
              Help
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
