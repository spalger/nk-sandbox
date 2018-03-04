const { resolve } = require('path');

module.exports = {
  mode: 'development',
  context: __dirname,
  entry: './plugin',
  output: {
    path: resolve(__dirname, 'bundles'),
    filename: 'plugin.js',
    library: 'defineKibanaPlugin',
    libraryTarget: 'jsonp',
    libraryExport: 'default',
  },
};
