var mhash = require('mhash');

exports.type = 'adler32';
exports.implementation = 'mhash';
exports.hash = function (value) {
  return mhash('adler32', value);
};
