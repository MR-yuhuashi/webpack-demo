const  path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry:{
    index: './src/index.js',
  },
  output: {
    filename: '[name].js',
    // chunkFilename: '[name].bundle.js', // 决定非入口chunk的名称
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
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