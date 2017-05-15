import React from 'react';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './home';
import About from './about';
import Registration from './registration';
import Discussions from './discussions';
import Sponsors from './sponsors';
import Venue from './venue';
import News from './news';

const App = () => (
  <Router>
    <div>
      <h1>Decoupled Dev Days</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/registration">Registration</Link></li>
        <li><Link to="/discussions">Discussions</Link></li>
        <li><Link to="/sponsors">Sponsors</Link></li>
        <li><Link to="/venue">Venue</Link></li>
        <li><Link to="/news">News</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/registration" component={Registration}/>
      <Route path="/discussions" component={Discussions}/>
      <Route path="/sponsors" component={Sponsors}/>
      <Route path="/venue" component={Venue}/>
      <Route path="/news" component={News}/>

    </div>
  </Router>
);

export default App;
