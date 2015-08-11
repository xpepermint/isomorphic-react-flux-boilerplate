import Iso from 'iso';
import React from 'react';
import ReactDomServer from 'react-dom/server';
import Router from 'react-router';
import Location from 'react-router/lib/Location';
import cookie from 'react-cookie';
import routes from '../../app/routes';
import Alt from '../../app/lib/Alt';
import AltBootstrap from '../lib/AltBootstrap';

export default {render};

function render(req, res, next) {
  cookie.setRawCookie(req.headers.cookie);
  cookie.save = res.cookie;

  let location = new Location(req.path, req.query);
  Router.run(routes, location, (error, state, transition) => {
    if (error) return next(error);
    if (transition.isCancelled) return res.redirect(transition.redirectInfo.pathname);

    AltBootstrap.run(state, req).then(snapshot => {
      Alt.bootstrap(snapshot);

      let markup = ReactDomServer.renderToString(<Router {...state}/>);
      let html = Iso.render(markup, Alt.flush());
      res.render('index', {html});
    }).catch(next);
  });
}
