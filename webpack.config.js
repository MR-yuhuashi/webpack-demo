const  path = require('path');

module.exports = {
  entry:{
    index: './src/index.js',
  }, 
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js', // 决定非入口chunk的名称
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    // config.optimization.splitChunks({
    //   name: 'common' // 指定公共module的名称
    // })
  ]
}