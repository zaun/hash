var mhash = require('mhash');

exports.type = 'sha256';
exports.implementation = 'mhash';
exports.hash = function (value) {
  return mhash('sha256', value);
};
