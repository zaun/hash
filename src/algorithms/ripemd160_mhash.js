var mhash = require('mhash');

exports.type = 'ripemd160';
exports.implementation = 'mhash';
exports.hash = function (value) {
  return mhash('ripemd160', value);
};
