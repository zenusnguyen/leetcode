"use strict";

var reverseString = function reverseString(str) {
  return str.split("").reverse().join("");
};

reverseString("abc");
console.log('reverseString("abc"): ', reverseString("abc"));