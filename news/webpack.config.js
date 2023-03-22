const path = require('path');
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: __dirname,
  entry: './frontend/src/index.js',
  output: {
    path: path.resolve('./frontend/src/Assets/webpack_bundles/'),
    filename: "bundle.js"
  },
  plugins: [
    new BundleTracker({filename: './frontend/webpack-stats.json'})
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  stats: {
    errorDetails: true
  }
  
}