const  path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry:{
    index: './src/index.js',
  },
  output: {
    filename: '[name].js',
    // chunkFilename: '[name].bundle.js', // 决定非入口chunk的名称
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'caching'
    })
  ],
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //     minSize: 0
  //   }
  // }
}