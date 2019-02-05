const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');
const webpack = require('webpack')

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'build.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new PrerenderSPAPlugin({
      staticDir: path.join(__dirname, './dist'),
      routes: [ '/' ],
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ],
  devtool: '#source-map'
});
