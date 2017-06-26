var mhash = require('mhash');

exports.type = 'snefru128';
exports.implementation = 'mhash';
exports.hash = function (value) {
  return mhash('snefru128', value);
};
