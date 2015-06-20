var path = require('path');
var argv = require('minimist')(process.argv.slice(2));
var webpack = require('webpack');
var CompressionPlugin = require('compression-webpack-plugin');
var HashPlugin = require('hash-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  entry: {
    bundle: path.resolve(__dirname, 'app/client.js')
  },
  output: {
    path: path.resolve(__dirname, 'public/assets'),
    filename: '[name].[hash].js',
    publicPath: 'http://' + (argv.host || 'localhost') + ':' + (argv.port || 8080) + '/',
  },
  module: {
    loaders: [
      {test: /\.js(x)?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/},
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.json$/, loaders: ['json']},
      {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')},
      {test: /\.styl$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader')},
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new CompressionPlugin(),
    new HashPlugin({path: path.resolve(__dirname, 'public/assets') }),
    new ExtractTextPlugin('[name].[hash].css')
  ]
};

module.exports = config;
