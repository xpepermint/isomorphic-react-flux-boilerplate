import express from 'express';
import assets from 'express-hash-webpack';
import swig from 'swig';
import server from './app/server';

let app = express();

app.set('views', `${__dirname}/app`);
app.set('view engine', 'jade');

app.use(express.static(`${__dirname}/public`));

app.use(assets({
  hashPath: './public/assets',
  assetTemplate: 'http://localhost:4445[path][name][hash][ext]'
}));

app.get('*', server);

export default app;
