"use strict";

/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function (x) {
//   const LIMIT = Math.pow(2, 31);
//   if (x > LIMIT - 1 || x < -LIMIT) {
//     return false;
//   }
//   let reverse =
//     parseInt(Math.abs(x).toString().split("").reverse().join("")) *
//     (x / Math.abs(x));
//   return (reverse = x ? true : false);
// };
var isPalindrome = function isPalindrome(x) {
  var LIMIT = Math.pow(2, 31);

  if (x > LIMIT - 1 || x < -LIMIT) {
    return false;
  }

  return x.toString() === x.toString().split("").reverse().join("") ? true : false;
};