var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var precss       = require('precss');

var location = {
  build: './build/',
  source: './src/'
};

module.exports = {
  entry: location.source + 'entry.jsx',
  output: {
    path: __dirname,
    filename: location.build + 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      title: 'Test',
      filename: location.build + 'index.html',
      template: location.source + 'entry.html'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css',
          'postcss',
          'sass'
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: [
            'react',
            'es2015'
          ]
        }
      }
    ]
  },
  postcss: function () {
    return [autoprefixer, precss];
  }
};
