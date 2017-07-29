import React from 'react';
import Pantheon from './sponsors/pantheon';
import Acquia from './sponsors/acquia';
import Mediacurrent from './sponsors/mediacurrent';
import Lullabot from './sponsors/lullabot';

const Sponsors = () => (
  <div className="sponsors">
    <h1>Sponsors</h1>
    <h2>Diamond Sponsor</h2>
    <a href="http://lullabot.com"><img src="assets/sponsors/pantheon.svg" alt="Pantheon" title="Pantheon"/></a>
    <p>This is a placeholder</p>

    <h2>Gold Sponsors</h2>
    <div className="gold">
      <div className="sponsor">
        <a href="http://acquia.com"><Acquia /></a>
      </div>
      <div className="sponsor">
        <a href="http://phase2.com"><img src="assets/sponsors/phase2.png" alt="Phase2" title="Phase2"/></a>
      </div>
      <div className="sponsor">
        <a href="http://mediacurrent.com"><Mediacurrent /></a>
      </div>
    </div>

    <h2>Silver Sponsors</h2>
    <div className="silver">
      <div className="sponsor">
        <a href="http://pantheon.io"><Pantheon /></a>
      </div>
      <div className="sponsor">
        <a href="http://lullabot.com"><Lullabot /></a>
      </div>
    </div>
  </div>
);

export default Sponsors;
