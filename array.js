var shiftGrid = function (grid, k) {
  let flattedArray = grid.flat();
  for (let i = 0; i < k; i++) {
    flattedArray.unshift(flattedArray.pop());
  }
  for (let i = 0; i < grid.length; i++) {
    flattedArray.push(flattedArray.splice(0, grid[0].length));
  }
  return flattedArray;
};

console.log(
  shiftGrid(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    2
  )
);
