const webpack = require('webpack');
const path = require('path');

const src = path.join(__dirname, 'client/src')
const dist = path.join(__dirname, 'client/dist')
const common = {
  context: src,
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'env']
        },
      },
    ],
  }
};

const client = {
  entry: './client.js',
  output: {
    path: dist,
    filename: 'App.js'
  }
};

const server = {
  entry: './server.js',
  target: 'node',
  output: {
    path: dist,
    filename: 'App-server.js',
    libraryTarget: 'commonjs-module'
  }
};

module.exports = [
  Object.assign({}, common, client),
  Object.assign({}, common, server)
];