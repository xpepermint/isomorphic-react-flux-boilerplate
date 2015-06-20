import React from 'react';
import Router, {Route} from 'react-router';

import App from './components/App';
import About from './components/About';
import Locations from './components/Locations';

export default (
  <Route path="/" component={App}>
    <Route path="about" component={About}/>
    <Route path="locations" component={Locations}/>
  </Route>
);
