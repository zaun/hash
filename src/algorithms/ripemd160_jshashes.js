var Hashes = require('jshashes');

exports.type = 'ripemd160';
exports.implementation = 'jshashes';
var hash = new Hashes.RMD160();
exports.hash = function (value) {
  return hash.hex(value);
};
