var Hashes = require('jshashes');

exports.type = 'sha256';
exports.implementation = 'jshashes';
var hash = new Hashes.SHA256();
exports.hash = function (value) {
  return hash.hex(value);
};
