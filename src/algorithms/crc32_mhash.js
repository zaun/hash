var mhash = require('mhash');

exports.type = 'crc32';
exports.implementation = 'mhash';
exports.hash = function (value) {
  return mhash('crc32', value);
};
