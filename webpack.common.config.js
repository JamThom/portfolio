const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|wav|eot|woff2|woff|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  // optimization: {
  //   sourceMap: true,
  //   compress: {
  //     warnings: false
  //   }
  // },
  resolve: {
    alias: {
      'Styles': path.resolve(__dirname, 'src/styles'),
      'Components': path.resolve(__dirname, 'src/components/'),
      'Images': path.resolve(__dirname, 'src/images/'),
      'Data': path.resolve(__dirname, 'src/data.js'),
      'Constants': path.resolve(__dirname, 'src/constants.js')
    },
    extensions: ['*', '.js', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    })
  ]
}
