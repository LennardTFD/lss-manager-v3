const path = require('path');
const webpack = require('webpack');
var entry = require('webpack-glob-entry')

module.exports = {
  entry: {
    main: './lss-manager-v3/lss-manager-v3.dev.js',
    helpers: './lss-manager-v3/helperfunctions.js',
    modules: './modules/lss-managedsettings/ManagedSettings.user.js'
  },
  output: {
    filename: 'lss-manager-[name].user.js',
    path: path.resolve(__dirname),
  },
  //mode: 'production',
  mode: 'development',
  watch:true,
};