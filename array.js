// var shiftGrid = function (grid, k) {
//   let flattedArray = grid.flat();
//   for (let i = 0; i < k; i++) {
//     flattedArray.unshift(flattedArray.pop());
//   }
//   for (let i = 0; i < grid.length; i++) {
//     flattedArray.push(flattedArray.splice(0, grid[0].length));
//   }
//   return flattedArray;
// };

// console.log(
//   shiftGrid(
//     [
//       [1, 2, 3],
//       [4, 5, 6],
//       [7, 8, 9],
//     ],
//     2
//   )
// );

// var countStudentsUnableToEat = function (students, sandwiches) {
//   let count = 0;
//   while (count < students.length) {
//     if (students[0] === sandwiches[0]) {
//       students.shift();
//       sandwiches.shift();
//       count = 0;
//     } else {
//       students.push(students.shift());
//       count++;
//     }
//   }

//   return count;
// };

// console.log(countStudentsUnableToEat([1, 1, 0, 0], [0, 1, 0, 1])); // 0
// console.log(countStudentsUnableToEat([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1])); //  3

// var finalPrices = function (prices) {
//   let result = [];
//   for (let i = 0; i < prices.length; i++) {
//     let isDiscounted = false;
//     for (let j = i + 1; j < prices.length; j++) {
//       if (prices[j] <= prices[i]) {
//         result.push(prices[i] - prices[j]);
//         isDiscounted = true;
//         break;
//       }
//     }
//     if (!isDiscounted) {
//       result.push(prices[i]);
//     }
//   }
//   console.log(result);
// };

// console.log(finalPrices([8, 4, 6, 2, 3]));

// var plusOne = function (digits) {
//   const num = +digits.map(Number).join("") + 1;
//   return Array.from(String(num), Number);
// };

// console.log(plusOne([1, 2, 3])); //[1,2,4]

// let arr = [
//   ["a", "b", "c"],
//   ["d", "e", "f"],
//   ["g", "h", "i"],
// ];

// function flatten(...arr) {
//   let result = [];
//   while (arr.length) {
//     const elem = arr.shift();
//     if (Array.isArray(elem)) {
//       console.log("in");
//       arr.unshift(...elem);
//       continue;
//     }
//     result.push(...elem);
//   }
//   return result;
// }

// console.log(flatten(arr));

// let arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// let sum = 0;
// for (let elem of arr) {
//   const num = elem.reduce((acc, item) => {
//     return acc + item;
//   }, 0);
//   sum += num;
// }

// console.log(sum);

// const arr = [0, [1, [2, [3], 4], 5, [6]], 7];

// function flatten(...arr) {
//   let result = [];
//   while (arr.length) {
//     const item = arr.shift();
//     if (Array.isArray(item)) {
//       arr.unshift(...item);
//       continue;
//     }
//     result.push(item);
//   }
//   return result;
// }

// console.log(flatten(arr));

var findDisappearedNumbers = function (nums) {
  let obj = {};
  const newArr = [];

  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = true;
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!obj[i]) {
      newArr.push(i);
    }
  }
  return newArr;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); //[5,6]
console.log(findDisappearedNumbers([1, 1])); //[2]
