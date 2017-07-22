import React from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';

import '../styles/base.css';

import About from './about';
import Sponsoring from './sponsoring';
import Logo from './logo';
import Footer from './footer';

const App = () => (
  <Router>
    <div className="wrapper">
      <Logo />
      <h1>Decoupled <span className="title-secondary">Developer Days</span></h1>
      <div className="title-details">
        <div className="title-location">New York City</div>
        <div className="title-date">August 19&ndash;20, 2017</div>
        <div className="title-date"><a href="https://www.eventbrite.com/e/decoupled-developer-days-tickets-35731933174">Register to attend</a></div>
      </div>
      <Route path="/about" component={About} />
      <Route path="/sponsoring" component={Sponsoring} />
      <p>Decoupled Dev Days is a small developer-focused conference for architects, developers, and businesspeople involved in implementing decoupled Drupal architectures.</p>
      <p>Decoupled Drupal is the use of Drupal as a content service for other non-Drupal applications, whether they are in native desktop or mobile, universal JavaScript, set-top boxes, IoT devices, conversational interfaces, or other technologies.</p>
      <p>The mission of Decoupled Dev Days is threefold: share best practices in sessions, discuss difficult shared problems in discussions, and build open-source projects in sprints.</p>
      <Footer />
    </div>
  </Router>
);

export default App;
