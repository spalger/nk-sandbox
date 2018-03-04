const { resolve } = require('path');

module.exports = {
  mode: 'development',
  context: __dirname,
  entry: './entry',
  output: {
    path: resolve(__dirname, 'bundles'),
    filename: 'entry.js',
  },
};
