import React from 'react';
import {
  HashRouter as Router,
} from 'react-router-dom';

import '../styles/base.css';

import Logo from './logo';

const App = () => (
  <Router>
    <Logo />
  </Router>
);

export default App;
