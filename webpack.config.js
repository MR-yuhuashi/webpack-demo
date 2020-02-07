const  path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
  entry:{index: './src/index.js'},
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js', // 决定非入口chunk的名称
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
    new BundleAnalyzerPlugin()
    // config.optimization.splitChunks({
    //   name: 'common' // 指定公共module的名称
    // })
  ]
}