const webpack = require('webpack');
const util = require('./util');

module.exports = {
  devtool: 'cheap-source-map',
  mode: 'development',
  entry: {
    app: util.root('src/index.js')
  },
  output: {
    path: util.root('dist'),
    filename: 'app/[name].js',
    chunkFilename: '[id].js'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      { test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/ },
      { test: /\.html$/, use: ['raw-loader'], exclude: /node_modules/ },
      { test: /\.css$/, use: ['style-loader', 'css-loader'], exclude: /node_modules/ },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'], exclude: /node_modules/ }
    ]
  },
  devServer: {
    contentBase: util.root('dist'),
    host: '0.0.0.0',
    port: 7410,
    open: true
  }
};
