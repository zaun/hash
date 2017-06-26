var mhash = require('mhash');

exports.type = 'crc32b';
exports.implementation = 'mhash';
exports.hash = function (value) {
  return mhash('crc32b', value);
};
