import React from 'react';
import {
  Link
} from 'react-router-dom';

const Footer = () => (
  <div className="footer">
    <p>
      <Link to="about">
      About
      </Link> -
      <Link to="sponsoring">
      Sponsoring
      </Link> -
      <a href="http://bit.ly/2tJh1EL" target="_blank">Register</a> -
      <a href="https://twitter.com/decoupleddays" target="_blank">Twitter</a> -
      <a href="http://eepurl.com/cRLvXP" target="_blank">Newsletter Signup</a> - 
      <a href="mailto:decoupleddevdays@gmail.com" target="_blank">Email</a>
    </p>
  </div>
);

export default Footer;
