var mhash = require('mhash');

exports.type = 'haval224';
exports.implementation = 'mhash';
exports.hash = function (value) {
  return mhash('haval224', value);
};
