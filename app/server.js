import Iso from 'iso';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Router from 'react-router';
import Location from 'react-router/lib/Location';
import Cookie from 'react-cookie';
import routes from './routes';
import Alt from './lib/Alt';
import bootstrap from './lib/bootstrap';

export default (req, res, next) => {
  Cookie.setRawCookie(req.headers.cookie||'');

  let location = new Location(req.path, req.query);
  Router.run(routes, location, (error, state, transition) => {
    if (error) return next(error);
    if (transition.isCancelled) return res.redirect(transition.redirectInfo.pathname);

    let accessToken = req.cookies.accessToken;
    bootstrap(state, {accessToken}).then(snapshot => {
      Alt.bootstrap(snapshot);

      let markup = ReactDOMServer.renderToString(<Router {...state}/>);
      let html = Iso.render(markup, Alt.flush());
      res.render('index', {html});
    }).catch(next);
  });
};
