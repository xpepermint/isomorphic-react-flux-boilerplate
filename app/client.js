require('./styles/index.styl');

import alt from './alt';
import React from 'react';
import Router from 'react-router';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import routes from './routes';
import bootstrap from './bootstrap';

bootstrap().then((stores) => {
  alt.bootstrap(stores);

  React.render(
    <Router history={new BrowserHistory} children={routes}/>,
    document.getElementById('app')
  );
});
