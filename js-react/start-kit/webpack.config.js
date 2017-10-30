const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: path.join(__dirname, 'app.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader']
      }
    ],
  },
};

