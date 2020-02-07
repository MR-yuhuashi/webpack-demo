const  path = require('path');

module.exports = {
  entry:{
    index: './src/index.js',
    another: './src/another-module.js',
    add: './src/add.js'
  }, 
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    // config.optimization.splitChunks({
    //   name: 'common' // 指定公共module的名称
    // })
  ],
  optimization: {
      runtimeChunk: {
        name: "manifest"        //指定公共 bundle 的名称
     },
    splitChunks: {
      chunks: "all",
      minSize: 0,
      cacheGroups: {
        // 抽取lodash代码

        // lodashBase: {
        //   test: (module) => {
        //     return /lodash|_/.test(module.context);
        //   },
        //   chunks: 'initial',
        //   name: 'lodashBase',
        //   priority: 10
        // }
      }
    }
  },
}