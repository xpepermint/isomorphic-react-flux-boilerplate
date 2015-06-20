// Attaching styles.
require('./styles/index.styl');

// Running react app.
import React from 'react';
import Router from 'react-router';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import routes from './routes';

React.render(
  <Router history={new BrowserHistory} children={routes}/>,
  document.getElementById('app')
);
