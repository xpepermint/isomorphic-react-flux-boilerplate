import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Login from './components/Login';
import Logout from './components/Logout';
import Project from './components/Project';
import Projects from './components/Projects';
import Stats from './components/Stats';
import requireAuthentication from './lib/requireAuthentication';

export default (
  <Route path="/" component={App}>
    <Route path="/stats" component={Stats}/>
    <Route path="/login" component={Login}/>
    <Route path="/logout" component={Logout}/>
    <Route path="/projects" component={Projects} onEnter={requireAuthentication}/>
    <Route path="/projects/:projectId" component={Project} onEnter={requireAuthentication}/>
  </Route>
);
