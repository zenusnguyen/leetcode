"use strict";

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function isValid(s) {
  if (s.length % 2 !== 0) return false;
  var openSymbol = ["(", "{", "["];
  var closeSymbol = new Map();
  closeSymbol.set(")", "(");
  closeSymbol.set("}", "{");
  closeSymbol.set("]", "[");
  var counter = s.length / 2;
  var store = [];

  for (var i = 0; i < s.length; i++) {
    if (openSymbol.indexOf(s[i]) !== -1) {
      store.push(s[i]);
    } else {
      if (store.pop() !== closeSymbol.get(s[i])) return false;
      counter--;
    }
  }

  return counter == 0 ? true : false;
};