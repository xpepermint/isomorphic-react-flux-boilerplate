import React from 'react';
import Router from 'react-router';
import Location from 'react-router/lib/Location';
import routes from './routes';
import bootstrap from './bootstrap';
import Alt from './lib/Alt';

export default (req, res) => {
  let location = new Location(req.path, req.query);

  bootstrap(req).then((stores) => {
    Alt.bootstrap(stores);

    Router.run(routes, location, (error, state, transition) => {
      let html = React.renderToString(<Router {...state}/>);
      res.render('index', {stores, html});
    });
  });
};
