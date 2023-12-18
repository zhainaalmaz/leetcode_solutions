//day1
// var twoSum = function (nums, target) {
//   const obj = {};

//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];
//     if (obj.hasOwnProperty(complement)) {
//       return [obj[complement], i];
//     }

//     obj[nums[i]] = i;
//   }
// };

// var twoSum = function (nums, target) {
//   // Map()
//   const hash = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     const difference = target - nums[i];
//     if (hash.has(difference)) {
//       return [hash.get(difference), i];
//     }
//     hash.set(nums[i], i);
//   }
// };

// console.log(twoSum([2, 7, 11, 15], 9));
