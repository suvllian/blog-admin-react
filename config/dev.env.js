const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const WebpackMd5Hash = require('webpack-md5-hash');

const loaders = {
  js: {test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel'},
  scss: {test: /\.(scss|css)$/, loader: 'style!css!postcss!sass'},
  image: {test: /\.(jpg|png|gif)$/, loader: 'file-loader' }
}

const HOST = '0.0.0.0';
const PORT = 3000;

module.exports = {
	devtool: 'cheap-module-source-map',
	resolve: {
	  extensions: ['', '.js', '.jsx'],
	  modulesDirectories: ['node_modules'],
	  root: path.resolve('.')
	},
	entry: {
		main: [
			`webpack-dev-server/client?http://${HOST}:${PORT}`,
	    'webpack/hot/only-dev-server',
	    'react-hot-loader/patch',
	    'babel-polyfill',
	    path.join(__dirname, './../src/index.js')
    ]
  },
  output: {
    filename: '[name].[hash:20].js',
    publicPath: '/'
  },
  loaders: [
    loaders.js,
    loaders.scss,
    loaders.image
  ],
	sassLoader: {
	  outputStyle: 'compressed',
	  precision: 10,
	  sourceComments: false
	},
  plugins: [
     new HtmlWebpackPlugin({
      chunkSortMode: 'dependency',
      filename: 'index.html',
      inject: 'body',
      template: path.join(__dirname, './../index.html')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
	    'process.env.NODE_ENV': JSON.stringify('development')
	  })
  ],
  devServer: {
    contentBase: '/src',
    historyApiFallback: true,
    host: HOST,
    hot: true,
    port: PORT,
    publicPath: '/',
    stats: {
      cached: true,
      cachedAssets: true,
      chunks: true,
      chunkModules: false,
      colors: true,
      hash: false,
      reasons: true,
      timings: true,
      version: false
    }
  }

}