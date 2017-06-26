var mhash = require('mhash');

exports.type = 'md2';
exports.implementation = 'mhash';
exports.hash = function (value) {
  return mhash('md2', value);
};
