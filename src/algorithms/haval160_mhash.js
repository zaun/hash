var mhash = require('mhash');

exports.type = 'haval160';
exports.implementation = 'mhash';
exports.hash = function (value) {
  return mhash('haval160', value);
};
