/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  console.log("...new Set(nums): ", ...new Set(nums));
  return [...new Set(nums)];
};

let arr = [1, 1, 2];

console.log(removeDuplicates(arr));
