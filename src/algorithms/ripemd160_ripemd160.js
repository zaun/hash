var RIPEMD160 = require('ripemd160');

exports.type = 'ripemd160';
exports.implementation = 'ripemd160';
exports.hash = function (value) {
  return new RIPEMD160().update(value).digest('hex');
};
