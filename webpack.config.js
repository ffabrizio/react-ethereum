/* global __dirname */

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry:  __dirname + '/app/main.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015','react'],
          plugins: ['transform-class-properties']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules'
      }
    ]
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/app/views/main.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    contentBase: "./public",
    colors: true,
    historyApiFallback: true,
    inline: true,
    hotComponents: true
  }
}