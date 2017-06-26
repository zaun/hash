var mhash = require('mhash');

exports.type = 'sha224';
exports.implementation = 'mhash';
exports.hash = function (value) {
  return mhash('sha224', value);
};
