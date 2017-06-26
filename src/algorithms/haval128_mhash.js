var mhash = require('mhash');

exports.type = 'haval128';
exports.implementation = 'mhash';
exports.hash = function (value) {
  return mhash('haval128', value);
};
