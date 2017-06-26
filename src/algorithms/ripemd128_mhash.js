var mhash = require('mhash');

exports.type = 'ripemd128';
exports.implementation = 'mhash';
exports.hash = function (value) {
  return mhash('ripemd128', value);
};
