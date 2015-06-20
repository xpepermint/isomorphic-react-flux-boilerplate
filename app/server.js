import React from 'react';
import Router from 'react-router';
import Location from 'react-router/lib/Location';
import alt from './alt';
import routes from './routes';

import locations from '../public/locations';

export default (req, res) => {
  let location = new Location(req.path, req.query);

  // initializing stores
  alt.bootstrap(JSON.stringify({
    LocationStore: { locations }
  }));

  // rendering react app
  Router.run(routes, location, (error, state, transition) => {
    let html = React.renderToString(<Router {...state}/>);
    res.render('index', { html });
  });
};
