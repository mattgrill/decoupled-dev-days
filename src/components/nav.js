import React from 'react';
import {
  Link
} from 'react-router-dom';

const Nav = () => (
  <nav class="header-nav">
    <ul>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/schedule">Schedule</Link></li>
      <li><Link to="/venue">Venue</Link></li>
      <li><Link to="/sponsoring">Sponsoring</Link></li>
      <li><Link to="sponsors">Sponsors</Link></li>
      <li><a href="http://bit.ly/2tJh1EL" target="_blank" rel="noopener noreferrer" class="register-link">Register</a></li>
    </ul>
  </nav>
);

export default Nav;
