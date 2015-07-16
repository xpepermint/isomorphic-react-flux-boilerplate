# Features

* [ReactJS](https://facebook.github.io/react/)

* [Flux](https://facebook.github.io/flux/docs/overview.html) (using [Alt](http://alt.js.org/) and [axios](https://github.com/mzabriskie/axios))

* Isomorphic (same code for client and server)

* [Webpack](http://webpack.github.io) (for compiling assets)

* Styles (using [Stylus](https://learnboost.github.io/stylus/))

* [Socket.io](http://socket.io) (for real-time communication)

* Centralized configuration

* ES6 syntax

# Setup

Follow these steps to start developing your next React app.

* Download this project source `git clone https://github.com/xpepermint/isomorphic-react-flux-boilerplate`.

* Run `npm install` to install dependencies.

* Run `npm run server` to start HTTP server.

* Run `npm run webpack:server` to start assets server.

* Open browser and navigate to `http://localhost:4444`.

## Socket.io

To enable sockets open `./app/components/Locations.js` and uncomment `LocationSocket.connect();` and `LocationSocket.disconnect();`. This project is configured to work directly with [socketio-boilerplate](https://github.com/xpepermint/socketio-boilerplate) which listens on `localhost:5555` by default. You can configure the socket server path inside `./app/sockets/LocationSocket.js` file.

# Related Projects

* [express-api-boilerplate](https://github.com/xpepermint/express-api-boilerplate)

* [socketio-boilerplate](https://github.com/xpepermint/socketio-boilerplate)
