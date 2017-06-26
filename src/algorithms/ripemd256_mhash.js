var mhash = require('mhash');

exports.type = 'ripemd256';
exports.implementation = 'mhash';
exports.hash = function (value) {
  return mhash('ripemd256', value);
};
