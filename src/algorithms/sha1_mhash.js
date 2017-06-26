var mhash = require('mhash');

exports.type = 'sha1';
exports.implementation = 'mhash';
exports.hash = function (value) {
  return mhash('sha1', value);
};
