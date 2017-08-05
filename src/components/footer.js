import React from 'react';
import {
  Link
} from 'react-router-dom';

const Footer = () => (
  <footer>
    <ul class="footer-first">
      <li><Link to="/about">About</Link></li>
      <li><Link to="/schedule">Schedule</Link></li>
      <li><Link to="/venue">Venue</Link></li>
      <li><Link to="/sponsoring">Sponsoring</Link></li>
      <li><Link to="sponsors">Sponsors</Link></li>
    </ul>
    <ul class="footer-second">
      <li><a href="http://bit.ly/2tJh1EL" target="_blank" rel="noopener noreferrer">Register</a></a>
      <li><a href="https://twitter.com/decoupleddays" target="_blank" rel="noopener noreferrer">Twitter</a></li>
      <li><a href="http://eepurl.com/cRLvXP" target="_blank" rel="noopener noreferrer">Subscribe</a></li>
      <li><a href="mailto:decoupleddevdays@gmail.com" target="_blank" rel="noopener noreferrer">E-mail</a></li>
    </ul>
  </footer>
);

export default Footer;
