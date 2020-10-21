/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let result = "";
  let arrLength = strs.length;
  if (arrLength == 0) return result;
  if (arrLength == 1) return strs[0];
  let firstStrLength = strs[0].length;
  for (let i = 0; i < firstStrLength; i++) {
    for (let j = 1; j < arrLength; j++) {
      if (strs[j][i] !== strs[0][i]) {
        return result;
      }
    }
    result += strs[0][i];
  }
  return result;
};
// https://leetcode.com/problems/longest-common-prefix/solution/
