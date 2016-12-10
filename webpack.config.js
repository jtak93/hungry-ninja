var path = require('path');
var webpack = require('webpack');

var config = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader?sourceMap',
        include: path.join(__dirname, 'src/scss')
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?sourceMap',
        include: path.join(__dirname, 'src/scss')
      }
    ]
  }
};

module.exports = config;
