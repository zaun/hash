var mhash = require('mhash');

exports.type = 'md5';
exports.implementation = 'mhash';
exports.hash = function (value) {
  return mhash('md5', value);
};
