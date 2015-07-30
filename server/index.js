import express from 'express';
import assets from 'express-hash-webpack';
import cookies from 'cookie-parser';
import config from '../config';
import routes from './routes';
import pageNotFound from './middlewares/pageNotFound';
import errorHandler from './middlewares/errorHandler';

let app = express();
app.set('env', config.env);
app.set('trust proxy', 'loopback');
app.set('x-powered-by', false);
app.set('views', `${__dirname}/views`);
app.set('view engine', 'jade');
app.use(express.static(`${__dirname}/../public`));
app.use(assets({hashPath: '${__dirname}/../public/assets', assetTemplate: `${config.assetsBaseUrl}[path][name][hash][ext]`}));
app.use(cookies(config.appSecret));
app.use(routes, pageNotFound, errorHandler);

export default app;
