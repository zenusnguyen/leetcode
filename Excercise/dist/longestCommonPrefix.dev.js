"use strict";

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function longestCommonPrefix(strs) {
  var result = "";
  var arrLength = strs.length;
  if (arrLength == 0) return result;
  if (arrLength == 1) return strs[0];
  var firstStrLength = strs[0].length;

  for (var i = 0; i < firstStrLength; i++) {
    for (var j = 1; j < arrLength; j++) {
      if (strs[j][i] !== strs[0][i]) {
        return result;
      }
    }

    result += strs[0][i];
  }

  return result;
}; // https://leetcode.com/problems/longest-common-prefix/solution/