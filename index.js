import express from 'express';
import assets from 'express-hash-webpack';
import server from './app/server';

let app = express();

app.use(express.static(`${__dirname}/public`));

app.set('views', `${__dirname}/app`);
app.set('view engine', 'ejs');

app.use(assets({
  hashPath: './public/assets',
  assetTemplate: 'http://localhost:4445[path][name][hash][ext]'
}));

app.get('*', server);

export default app;
