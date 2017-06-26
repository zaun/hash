var mhash = require('mhash');

exports.type = 'sha512';
exports.implementation = 'mhash';
exports.hash = function (value) {
  return mhash('sha512', value);
};
