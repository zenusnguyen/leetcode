/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = (nums, target) => {
    
    let map = new Map();
  
    nums.map((item, index) => {
      map.set(item, index);
    });
  
    for (i = 0; i < nums.length; i++) {
      let complement = target - nums[i];
         if (map.has(complement) && map.get(complement) != i) {
        return [i, map.get(complement)];
      }
    }
  };



  let arr= [2,2]


  console.log('twoSum: ', twoSum([2,2],4));