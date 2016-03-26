//setup for webpacks
var webpack = require('webpack');
var path = require('path');
module.exports = {
  devtool: 'eval',
  entry: [
    './src/index.js',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/public/',
    filename: 'bundle.js'
  },
  devServer: {
  historyApiFallback: true,
    contentBase: './',
    hot: true  //enable hot module plugin
  },
  //set up for babel translator
  module: {
    loaders:
    [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'}
    // },
    // { test: /\.css$/, loader: "style-loader!css-loader" }
  ]
  },
  resolve: {
    alias: {
      components: path.resolve( __dirname, 'src', 'components'),
      reducers: path.resolve( __dirname, 'src', 'reducers'),
      actions: path.resolve( __dirname, 'src', 'actions')
    },
    extensions: ['','.js', '.jsx', 'css']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
