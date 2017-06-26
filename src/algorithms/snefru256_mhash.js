var mhash = require('mhash');

exports.type = 'snefru256';
exports.implementation = 'mhash';
exports.hash = function (value) {
  return mhash('snefru256', value);
};
