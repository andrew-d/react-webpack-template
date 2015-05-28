module.exports = require('./make-webpack-config')({
  production   : false,
  lint         : true,
  devtool      : 'source-map',
  devServerHost: 'localhost:3000',
});
