var mhash = require('mhash');

exports.type = 'tiger128';
exports.implementation = 'mhash';
exports.hash = function (value) {
  return mhash('tiger128', value);
};
