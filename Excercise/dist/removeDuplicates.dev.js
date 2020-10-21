"use strict";

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function removeDuplicates(nums) {
  var result = [];

  for (var i = 0; i < nums.length - 1; i++) {
    if (nums[i] != nums[i + 1]) {
      nums = nums.splice(i + 1, nums.length);
      result.push(nums[i]);
    }
  }

  return result;
};

var arr = [1, 1, 2];
console.log(removeDuplicates(arr));