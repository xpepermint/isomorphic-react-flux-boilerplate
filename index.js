import express from 'express';
import assets from 'express-hash-webpack';
import cookies from 'cookie-parser';
import server from './app/server';
import config from './config';

let app = express();
app.set('trust proxy', 'loopback');
app.set('x-powered-by', false);
app.set('views', `./app`);
app.set('view engine', 'jade');
app.use(express.static(`./public`));
app.use(assets({hashPath: './public/assets', assetTemplate: `${config.assetsBaseUrl}[path][name][hash][ext]`}));
app.use(cookies(config.appSecret));
app.get('*', server);

export default app;
