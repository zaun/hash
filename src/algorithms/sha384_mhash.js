var mhash = require('mhash');

exports.type = 'sha384';
exports.implementation = 'mhash';
exports.hash = function (value) {
  return mhash('sha384', value);
};
