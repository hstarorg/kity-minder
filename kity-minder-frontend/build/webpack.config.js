const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
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
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        }),
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        }),
        exclude: /node_modules/
      }
    ]
  },
  plugins: [new ExtractTextPlugin('app/app.css')],
  devServer: {
    contentBase: util.root('dist'),
    host: '0.0.0.0',
    port: 7410,
    open: true
  }
};
