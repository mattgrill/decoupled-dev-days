import React from 'react';
import {
  Link,
  NavLink
} from 'react-router-dom';

const Footer = () => (
  <footer>
    <nav className="footer-first">
      <ul>
        <li><NavLink to="/about" activeClassName="is-active">About</NavLink></li>
        <li><NavLink to="/schedule" activeClassName="is-active">Schedule</NavLink></li>
        <li><NavLink to="/venue" activeClassName="is-active">Venue</NavLink></li>
        <li><NavLink to="/sponsors" activeClassName="is-active">Sponsors</NavLink></li>
        <li><NavLink to="/sponsoring" activeClassName="is-active">Sponsoring</NavLink></li>
        <li><a href="http://bit.ly/2tJh1EL" target="_blank" rel="noopener noreferrer" className="register-link">Register</a></li>
      </ul>
    </nav>
    <ul className="footer-second">
      <li><a href="https://twitter.com/decoupleddays" target="_blank" rel="noopener noreferrer">Twitter</a></li>
      <li><a href="http://eepurl.com/cRLvXP" target="_blank" rel="noopener noreferrer">Subscribe</a></li>
      <li><a href="mailto:decoupleddevdays@gmail.com" target="_blank" rel="noopener noreferrer">E-mail</a></li>
    </ul>
    <p>&copy; 2017 <Link to="/">Decoupled Dev Days</Link>. All rights reserved.</p>
  </footer>
);

export default Footer;
