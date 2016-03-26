//setup for webpacks
var webpack = require('webpack');
var path = require('path');


module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'

  },
  //set up for babel translator
  module: {
    loaders:
    [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      include: path.join(__dirname, 'src'),
      loader: 'babel'}
    // },
    // {test: /\.css$/,loader: "style-loader!css-loader" }
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
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    })
  ]
};
