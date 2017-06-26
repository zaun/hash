var mhash = require('mhash');

exports.type = 'gost';
exports.implementation = 'mhash';
exports.hash = function (value) {
  return mhash('gost', value);
};
