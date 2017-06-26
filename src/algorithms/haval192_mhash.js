var mhash = require('mhash');

exports.type = 'haval192';
exports.implementation = 'mhash';
exports.hash = function (value) {
  return mhash('haval192', value);
};
