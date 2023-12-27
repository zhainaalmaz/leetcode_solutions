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

// var sumOfUnique = function (nums) {
//   let obj = {};
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     obj[nums[i]] = obj[nums[i]] + 1 || 1;
//   }
//   for (let elem in obj) {
//     if (obj[elem] === 1) {
//       sum += +elem;
//     }
//   }
//   return sum;
// };

// console.log(sumOfUnique([1, 2, 3, 2]));
// console.log(sumOfUnique([1, 1, 1, 1, 1]));
// console.log(sumOfUnique([1, 2, 3, 4, 5]));

var longestConsecutive = function (nums) {
  const unique = new Set(nums);
  let longestStack = 0;
  for (let num of unique) {
    if (!unique.has(num - 1)) {
      let currentNum = num;
      let currentStack = 1;
      while (unique.has(currentNum + 1)) {
        currentStack++;
        currentNum++;
      }
      longestStack = Math.max(longestStack, currentStack);
    }
  }
  return longestStack;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); //4
