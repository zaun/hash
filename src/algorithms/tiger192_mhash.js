var mhash = require('mhash');

exports.type = 'tiger192';
exports.implementation = 'mhash';
exports.hash = function (value) {
  return mhash('tiger192', value);
};
