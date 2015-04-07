var webpack = require('webpack');

var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({
    browserNoActivityTimeout: 30000,
    browsers: [process.env.CONTINUOUS_INTEGRATION ? 'Firefox' : 'Chrome'],
    singleRun: process.env.CONTINUOUS_INTEGRATION === 'true',

    frameworks: ['mocha'],

    files: [
      'tests.webpack.js',
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap'],
    },
    reporters: process.env.CONTINUOUS_INTEGRATION ? ['dots'] : ['mocha'],

    webpack: {
      devtool: 'inline-source-map',
      resolve: webpackConfig.resolve,
      module: {
        loaders: webpackConfig.module.loaders,
      },
      plugins: [
        new webpack.DefinePlugin({
          "process.env": {
            NODE_ENV:   JSON.stringify("test"),
            NODE_DEBUG: JSON.stringify(""),
          }
        }),
      ],
    },

    webpackServer: {
      noInfo: true,
    },
  });
};
