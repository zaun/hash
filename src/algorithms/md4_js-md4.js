var md4 = require('js-md4');

exports.type = 'md4';
exports.implementation = 'js-md4';
exports.hash = function (value) {
  return md4(value);
};
