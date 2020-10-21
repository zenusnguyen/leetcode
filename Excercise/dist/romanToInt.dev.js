"use strict";

var romanToInt = function romanToInt(s) {
  var symbol = ["I", "V", "X", "L", "C", "D", "M"];
  var value = [1, 5, 10, 50, 100, 500, 1000];
  var map = new Map();

  for (var i = 0; i < symbol.length; i++) {
    map.set(symbol[i], value[i]);
  }

  var sum = 0;
  var pre = 0;

  for (var _i = s.length - 1; _i >= 0; _i--) {
    var cur = map.get(s[_i]);

    if (_i == s.length - 1) {
      sum = sum + cur;
    } else {
      if (cur < pre) {
        sum = sum - cur;
      } else {
        sum = sum + cur;
      }
    }

    pre = cur;
  }

  return sum;
};