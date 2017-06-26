var mhash = require('mhash');

exports.type = 'haval256';
exports.implementation = 'mhash';
exports.hash = function (value) {
  return mhash('haval256', value);
};
