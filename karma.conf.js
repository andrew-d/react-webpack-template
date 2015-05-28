var extend = require('util')._extend,
    webpack = require('webpack');

var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({
    browserNoActivityTimeout: 30000,
    browsers: [process.env.CONTINUOUS_INTEGRATION ? 'Firefox' : 'Chrome'],
    singleRun: process.env.CONTINUOUS_INTEGRATION === 'true',

    frameworks: ['mocha'],

    files: [
      'test/**/*.test.js',
      'test/**/*.test.jsx',
    ],
    preprocessors: {
      'test/**/*.test.js':  ['webpack'],
      'test/**/*.test.jsx': ['webpack'],
    },
    reporters: [process.env.CONTINUOUS_INTEGRATION ? 'dots' : 'mocha', 'coverage'],

    coverageReporter: {
      type: 'html',
      dir: 'coverage/',
    },

    webpack: {
      devtool: 'inline-source-map',
      resolve: webpackConfig.resolve,
      module: {
        // Don't want to do code coverage on hot reloader - so filter out this loader
        loaders: webpackConfig.module.loaders.map(function(l) {
          var TEST_STRING = 'react-hot';

          if( !l.loaders || l.loaders.indexOf(TEST_STRING) === -1 ) {
            return l;
          }

          // Shallow-copy the loaders and remove the one we specified
          var newLoader = extend({}, l);
          newLoader.loaders = l.loaders.filter(function(el) {
            return el !== TEST_STRING;
          });

          return newLoader;
        }),

        // This injects the instrumentation for the Istanbul code coverage tool
        postLoaders: [{
          test: /\.jsx$/,
          exclude: /((node_modules|bower_components)\/)|\.test\.jsx?$/,
          loader: 'isparta-instrumenter-loader'
        }],
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
