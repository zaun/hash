var md2 = require('js-md2');

exports.type = 'md2';
exports.implementation = 'js-md2';
exports.hash = function (value) {
  return md2(value);
};
