import React, { Component, useState } from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
//import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Home from './home.js';
import About from './about.js';
import Sponsors from './sponsors.js';
import Schedule from './schedule.js';
import Classes from './classes.js';


class App extends Component {
  render() {
    return (
      <div>
        <HashRouter hashType="noslash">
          <div id="nav">
            <Link to="/">
            <img alt="logo" id="logo" src="assets/logo1.png" /> <img alt="mobile logo" id="mobile-logo" src="assets/logo2.png" />
            </Link>

          <div id="links">
            <Link to="/about">About</Link>
            <Link to="/sponsors">Sponsors</Link>
            <Link to="/classes">Classes</Link>
            <Link to="/schedule">Schedule</Link>
          </div>
          </div>
          <div id="content">

          <Route path="/about" component = {About}/>
          <Route path="/sponsors" component = {Sponsors}/>
          <Route path="/schedule" component = {Schedule}/>
          <Route path="/classes" component = {Classes}/>
          </div>

          <Route path="/" component={Home} />
        </HashRouter>
      </div>
    );
  }
}

export default App;
