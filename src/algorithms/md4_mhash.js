var mhash = require('mhash');

exports.type = 'md4';
exports.implementation = 'mhash';
exports.hash = function (value) {
  return mhash('md4', value);
};
