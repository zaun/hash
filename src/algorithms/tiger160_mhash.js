var mhash = require('mhash');

exports.type = 'tiger160';
exports.implementation = 'mhash';
exports.hash = function (value) {
  return mhash('tiger160', value);
};
