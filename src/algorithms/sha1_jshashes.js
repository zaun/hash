var Hashes = require('jshashes');

exports.type = 'sha1';
exports.implementation = 'jshashes';
var hash = new Hashes.SHA1();
exports.hash = function (value) {
  return hash.hex(value);
};
