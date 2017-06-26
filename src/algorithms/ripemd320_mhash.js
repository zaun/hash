var mhash = require('mhash');

exports.type = 'ripemd320';
exports.implementation = 'mhash';
exports.hash = function (value) {
  return mhash('ripemd320', value);
};
