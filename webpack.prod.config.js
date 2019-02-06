const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');
const webpack = require('webpack')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const SocialTags = require('social-tags-webpack-plugin')

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
    }),
    new FaviconsWebpackPlugin('./favicon.png'),
    new SocialTags({
      appUrl: 'https://jamthom.io',
      facebook: {
        'og:url': 'https://jamthom.io',
        'og:type': 'website',
        'og:title': 'James Thomson - frontend developer',
        'og:description': 'Freelance frontend developer based in Copenhagen',
        'og:site_name': 'JamThom',
        'og:locale': 'en_UK',
        'og:article:author': 'James Thomson',
      },
      twitter: {
        'twitter:card': 'summary',
        'twitter:url': 'https://jamthom.io',
        'twitter:title': 'James Thomson',
        'twitter:description': 'Freelance frontend developer based in Copenhagen'
      },
    })
  ],
  devtool: '#source-map'
});
