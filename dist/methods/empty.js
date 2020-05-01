'use strict';

var isEmpty = require('../helpers/isEmpty.js');

var variadic = require('../helpers/variadic.js');

var nestedValue = require('../helpers/nestedValue.js');

module.exports = function empty() {
  var _this = this;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var properties = variadic(args);
  return properties.filter(function (key) {
    return isEmpty(nestedValue(_this.data, key));
  }).length === properties.length;
};