/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  return nums.filter((item) => item !== val);
};
console.log("removeElement: ", removeElement([3, 2, 2, 3], 3));
