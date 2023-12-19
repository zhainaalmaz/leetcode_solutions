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

var countStudentsUnableToEat = function (students, sandwiches) {
  let count = 0;
  while (count < students.length) {
    if (students[0] === sandwiches[0]) {
      students.shift();
      sandwiches.shift();
      count = 0;
    } else {
      students.push(students.shift());
      count++;
    }
  }

  return count;
};

console.log(countStudentsUnableToEat([1, 1, 0, 0], [0, 1, 0, 1])); // 0
console.log(countStudentsUnableToEat([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1])); //  3
