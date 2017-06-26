var md5 = require('js-md5');

exports.type = 'md5';
exports.implementation = 'js-md5';
exports.hash = function (value) {
  return md5(value);
};
