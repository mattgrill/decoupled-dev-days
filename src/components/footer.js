import React from 'react';
import {
  Link
} from 'react-router-dom';

const Footer = () => (
  <div className="footer">
    <p>
      <Link to="/about">
      About
      </Link>
      - <Link to="/schedule">
      Schedule
      </Link>
      - <Link to="/sponsoring">
      Sponsoring
      </Link>
      - <Link to="sponsors">
      Sponsors
      </Link>
      - <a href="http://bit.ly/2tJh1EL" target="_blank" rel="noopener noreferrer">Register</a>
      - <a href="https://twitter.com/decoupleddays" target="_blank" rel="noopener noreferrer">Twitter</a>
      - <a href="http://eepurl.com/cRLvXP" target="_blank" rel="noopener noreferrer">Newsletter Signup</a>
      - <a href="mailto:decoupleddevdays@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
    </p>
  </div>
);

export default Footer;
