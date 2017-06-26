var md6hash = require('node-md6');

exports.type = 'md6';
exports.implementation = 'node-md6';
exports.hash = function (value) {
  return md6hash.getHashOfText(value);
};
