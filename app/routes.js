import React from 'react';
import Router, {Route} from 'react-router';
import App from './components/App';
import Login from './components/Login';
import Logout from './components/Logout';
import Location from './components/Location';
import Locations from './components/Locations';
import requireAuthentication from './lib/requireAuthentication';

export default (
  <Route path="/" component={App}>
    <Route path="/login" component={Login}/>
    <Route path="/logout" component={Logout}/>
    <Route path="/locations" component={Locations} onEnter={requireAuthentication}/>
    <Route path="/locations/:locationId" component={Location} onEnter={requireAuthentication}/>
  </Route>
);
