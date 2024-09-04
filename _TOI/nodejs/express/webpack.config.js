const path = require('path');

module.exports = {
  mode: 'development', // or 'production'
  entry: './src/js/events.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};