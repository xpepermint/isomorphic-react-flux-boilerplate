import React from 'react';
import Router, {Route} from 'react-router';
import App from './components/App';
import Login from './components/Login';
import Location from './components/Location';
import Locations from './components/Locations';
import requireAuthentication from './lib/requireAuthentication';

export default (
  <Route path="/" component={App}>
    <Route path="/login" component={Login}/>
    <Route path="/locations" component={Locations}/>
    <Route path="/locations/:locationId" component={Location} onEnter={requireAuthentication}/>
  </Route>
);
