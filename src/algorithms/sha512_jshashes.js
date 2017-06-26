var Hashes = require('jshashes');

exports.type = 'sha512';
exports.implementation = 'jshashes';
var hash = new Hashes.SHA512();
exports.hash = function (value) {
  return hash.hex(value);
};
