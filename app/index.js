import './styles/index.styl';

import Iso from 'iso';
import React from 'react';
import ReactDom from 'react-dom';
import Router from 'react-router';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import Alt from './lib/Alt';
import routes from './routes';

Iso.bootstrap((state, meta, container) => {
  Alt.bootstrap(state);
  ReactDom.render(<Router history={new BrowserHistory} children={routes}/>, container);
});
