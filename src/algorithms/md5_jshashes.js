var Hashes = require('jshashes');

exports.type = 'md5';
exports.implementation = 'jshashes';
var hash = new Hashes.MD5();
exports.hash = function (value) {
  return hash.hex(value);
};
