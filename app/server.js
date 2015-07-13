import React from 'react';
import Router from 'react-router';
import Location from 'react-router/lib/Location';
import routes from './routes';
import bootstrap from './bootstrap';
import alt from './alt';

export default (req, res) => {
  let location = new Location(req.path, req.query);
  let baseUrl = `${req.protocol}://${req.get('host')}`;

  bootstrap(baseUrl).then((stores) => {
    alt.bootstrap(stores);

    Router.run(routes, location, (error, state, transition) => {
      let html = React.renderToString(<Router {...state}/>);
      res.render('index', {stores, html});
    });
  });
};
