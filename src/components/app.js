import React from 'react';
import {
  HashRouter as Router,
} from 'react-router-dom';

import '../styles/base.css';

import Logo from './logo';
import Footer from './footer';

const App = () => (
  <Router>
    <div>
      <Logo />
      <Footer />
    </div>
  </Router>
);

export default App;
