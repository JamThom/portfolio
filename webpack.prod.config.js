var path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');

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
    })
  ]
});
