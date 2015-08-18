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
  // We use cookies to store accessToken. If the cookie exists it means that a
  // user is authenticated. We have to initialize the react-cookie package like
  // it would be initialized when running inside browser. This must be done
  // before running Router.run because authentication check is executed inside
  // onEnter method. We load cookies and patch methods which manipulate with
  // cookies.
  cookie.setRawCookie(req.headers.cookie);
  cookie.save = res.cookie.bind(res);

  let location = new Location(req.path, req.query);
  Router.run(routes, new Location(req.path, req.query), (error, state, transition) => {
    if (error) return next(error);
    // If the transaction is canceled it means that the router is redirecting to
    // a new route so we redirect a user.
    if (transition.isCancelled) return res.redirect(transition.redirectInfo.pathname);

    // Router.run moves to the first route. Flux doesn't have to be loaded
    // before Router.run. Here we already have router's state and we can easily
    // load initial data based on the components branch.
    AltBootstrap.run(state, req).then(snapshot => {
      Alt.bootstrap(snapshot);

      let markup = ReactDomServer.renderToString(<Router {...state}/>);
      let html = Iso.render(markup, Alt.flush());
      res.render('index', {html});
    }).catch(next);
  });
}

// bootstraping fetchData: https://github.com/jahrlin/isomorphic-flux-react-react-router/blob/master/src/server.js
