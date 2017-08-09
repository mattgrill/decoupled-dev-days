import React from 'react';
import {
  Link
} from 'react-router-dom';

const Index = () => (
  <div className="index">
    <h1>A different kind of Drupal conference</h1>
    <div className="content">
      <p>Decoupled Dev Days is a small developer-focused conference for architects, developers, and businesspeople involved in implementing decoupled Drupal architectures.</p>
      <p>Decoupled Drupal is the use of Drupal as a content service for other non-Drupal applications, whether they are in native desktop or mobile, universal JavaScript, set-top boxes, IoT devices, conversational interfaces, or other technologies.</p>
      <p>The mission of Decoupled Dev Days is threefold: share best practices in sessions, discuss difficult shared problems in discussions, and build open-source projects in sprints.</p>
      <p><Link to="/about">Learn more</Link></p>
    </div>
  </div>
);

export default Index;
