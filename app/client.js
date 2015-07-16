require('./styles/index.styl');

import Alt from './lib/Alt';
import React from 'react';
import Router from 'react-router';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import routes from './routes';
import bootstrap from './bootstrap';

bootstrap().then((stores) => {
  Alt.bootstrap(stores);

  React.render(
    <Router history={new BrowserHistory} children={routes}/>,
    document.getElementById('app')
  );
});
