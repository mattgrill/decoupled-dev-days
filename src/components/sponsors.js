import React from 'react';
import Acquia from './sponsors/acquia';
import Mediacurrent from './sponsors/mediacurrent';
import Fourkitchens from './sponsors/fourkitchens';
import Lullabot from './sponsors/lullabot';

const Sponsors = () => (
  <div className="sponsors">
    <h1>Sponsors</h1>
    <div className="content">

      <h2>Venue Sponsor</h2>
      <div className="venue">
        <div className="sponsor">
          <a href="http://www.nbcuniversal.com"><img src="assets/sponsors/nbcuniversal.png" alt="NBCUniversal" title="NBCUniversal"/></a>
        </div>
      </div>

      <h2>Gold Sponsors</h2>
      <div className="gold">
        <div className="sponsor">
          <a href="https://www.acquia.com/"><Acquia /></a>
        </div>
        <div className="sponsor">
          <a href="https://www.mediacurrent.com/"><Mediacurrent /></a>
        </div>
        <div className="sponsor">
          <a href="https://www.mlssoccer.com/">
            <img src="assets/sponsors/MLS15.png" alt="MLS" title="MLS" />
          </a>
        </div>
        <div className="sponsor">
          <a href="https://www.phase2technology.com/"><img src="assets/sponsors/phase2.png" alt="Phase2" title="Phase2"/></a>
        </div>
        <div className="sponsor">
          <a href="https://atendesigngroup.com/"><img src="assets/sponsors/aten-horizontal-rgb-lg.png" alt="Aten Design Group" title="Aten Design Group"/></a>
        </div>
      </div>

      <h2>Silver Sponsors</h2>
      <div className="silver">
      <div className="sponsor">
        <a href="https://www.amazeelabs.com">
          <img src="assets/sponsors/amazeeio_with_text_square.png" alt="Amazee Labs" title="Amazee Labs" />
        </a>
      </div>

        <div className="sponsor">
          <a href="https://www.fourkitchens.com/"><Fourkitchens /></a>
        </div>
        <div className="sponsor">
          <a href="https://www.lullabot.com/"><Lullabot /></a>
        </div>
        <div className="sponsor">
          <a href="https://pantheon.io/"><img src="assets/sponsors/pantheon.png" alt="Pantheon" title="Pantheon"/></a>
        </div>
      </div>
    </div>
  </div>
);

export default Sponsors;
