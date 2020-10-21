let arr = [3, 3, 11, 15];

// brute force ??

// var twoSum = function (nums, target) {
//   let result = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] == target) {
//         result.push(i, j);
//         break;
//       }
//     }
//   }
//   return result;
// };

// console.log(twoSum(arr, 9));

// two pass hash table

// const twoSum = (nums, target) => {
//   let map = new Map();

//   nums.map((item, index) => {
//     map.set(item, index);
//   });

//   for (i = 0; i < nums.length; i++) {
//     let complement = target - nums[i];
//     console.log("complement: ", complement);
//     //7
//     if (map.has(complement) && map.get(complement) != i) {
//       return [i, map.get(complement)];
//     }
//   }
// };

// One pass hash table

const twoSum = (nums, target) => {
  let map = new Map();
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
    let complement = target - nums[i];
    if (map.has(complement) && map.get(complement) != i) {
      return [map.get(complement), i];
    }
  }
  return [];
};

console.log(twoSum(arr, 6));

let test = {
  hihi: 1,
  hihi: 2,
};
console.log('test: ', test);