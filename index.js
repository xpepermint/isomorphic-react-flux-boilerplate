import express from 'express';
import assets from 'express-hash-webpack';

let app = express();

app.use(express.static(__dirname+'/public'));
app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');

app.use(assets({
  hashPath: './public/assets',
  assetTemplate: 'http://localhost:4445[path][name][hash][ext]'
}));

app.get('*', require('./app/server'));

export default app;
