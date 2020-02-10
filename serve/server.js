const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleWare = require('webpack-dev-middleware');

const app = express();
const config = require('../webpack.dev.js');
const compiler = webpack(config);

app.use(webpackDevMiddleWare(compiler, {
  publicPath: config.output.publicPath
}));

app.listen(3000, () => {
  console.log('listening on port 3000!\n');
});