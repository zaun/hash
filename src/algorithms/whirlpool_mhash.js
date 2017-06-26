var mhash = require('mhash');

exports.type = 'whirlpool';
exports.implementation = 'mhash';
exports.hash = function (value) {
  return mhash('whirlpool', value);
};
