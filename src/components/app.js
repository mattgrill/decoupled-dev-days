import React from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';

import '../styles/base.css';

import Index from './index';
import About from './about';
import Program from './program';
import Venue from './venue';
import Sponsors from './sponsors';
import Sponsoring from './sponsoring';
import Logo from './logo';
import Nav from './nav';
import Footer from './footer';

const App = () => (
  <Router>
    <div className="main">
      <div className="main-first">
        <Logo />
      </div>
      <div className="main-second">
        <header>
          <Nav />
        </header>
        <Route exact path="/" component={Index} />
        <Route path="/about" component={About} />
        <Route path="/program/:session?" component={Program} />
        <Route path="/venue" component={Venue} />
        <Route path="/sponsors" component={Sponsors} />
        <Route path="/sponsoring" component={Sponsoring} />
        <div className="footer-sponsors">
          <Sponsors />
        </div>
        <Footer />
      </div>
    </div>
  </Router>
);

export default App;
