var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

//
module.exports = {
  devtool: 'source-map',
  entry: {
    vendor: [
      'react',
      'react-dom',
      'react-router'],
    app: './src/'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'static/js/[name].[hash:20].js',
    publicPath: './'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'react-hot-loader'
          },
          {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'es2015'],
              plugins: [
                ['import', {libraryName: 'antd', style: 'css'}]
              ]
            }
          }]
      },
      {
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?minimize=true!sass-loader'
        })
      },
      {
        test: /\.(png|jpg)$/,
        use: 'url-loader?limit=25000&name=static/img/[name].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin( { filename: 'static/css/style.[hash:20].css'}),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),

    // 定义为生产环境，编译 React 时压缩到最小
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),

    // 压缩JS代码
    new webpack.optimize.UglifyJsPlugin({
      compress: true,
      beautify: false,
      comments: false
    }),

    // 提供公共代码
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'mainfest'],
      filename: 'static/js/[name].[hash:8].js'
    }),

    // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV === 'dev') || 'false'))
    })
  ]
};
