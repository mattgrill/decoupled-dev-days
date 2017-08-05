import React from 'react';
import {
  NavLink
} from 'react-router-dom';

const Nav = () => (
  <div className="header-nav">
    <nav>
      <ul>
        <li><NavLink to="/about" activeClassName="is-active">About</NavLink></li>
        <li><NavLink to="/schedule" activeClassName="is-active">Program</NavLink></li>
        <li><NavLink to="/venue" activeClassName="is-active">Venue</NavLink></li>
        <li><NavLink to="/sponsors" activeClassName="is-active">Sponsors</NavLink></li>
        <li><NavLink to="/sponsoring" activeClassName="is-active">Sponsoring</NavLink></li>
        <li><a href="http://bit.ly/2tJh1EL" target="_blank" rel="noopener noreferrer" className="register-link">Register</a></li>
      </ul>
    </nav>
  </div>
);

export default Nav;
