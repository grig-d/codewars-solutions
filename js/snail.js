// Snail Sort
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//  [4,5,6],
//  [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//  [8,9,4],
//  [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]

// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

// snail([[]]), [])
// snail([[1]]), [1]);
// snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [1, 2, 3, 6, 9, 8, 7, 4, 5]);

snail = function (array) {
  let result = [];
  let n = array[0].length;
  let iterations = n * 2 - 1;
  console.log(`n=${n}, iterations=${iterations}`);
  //
  // start(i=0; j=0)
  // i=0 i=1 i=2  / j=0
  // i=2          / j=1 j=2
  // i=1 i=0      / j=2
  // i=0          / j=1
  // start(i=1; j=1)
  //
  let startPoint = [0, 0];
  let maxWay = n;
  console.log(`startPoint=${startPoint}, maxWay=${maxWay}`);
  let x = 0;
  let y = 0;
  //   while way > 0
  for (x; x < maxWay; x++) {
    console.log(`x=${x}, y=${y}`);
    result.push(array[y][x]);
  }
  x = x - 1;
  y = y + 1;
  for (y; y < maxWay; y++) {
    console.log(`x=${x}, y=${y}`);
    result.push(array[y][x]);
  }
  y = y - 1;
  x = x - 1;
  for (x; x >= startPoint[0]; x--) {
    console.log(`x=${x}, y=${y}`);
    result.push(array[y][x]);
  }
  x = x + 1;
  y = y - 1;
  maxWay = maxWay - 1;
  console.log(`startPoint=${startPoint}, maxWay=${maxWay}`);
  if ((maxWay = 0)) {
    return result;
  }
  for (y; y > startPoint[1]; y--) {
    console.log(`x=${x}, y=${y}`);
    result.push(array[y][x]);
  }

//   maxWay = maxWay - 1;
  startPoint[0] = startPoint[0] + 1;
  startPoint[1] = startPoint[1] + 1;
  console.log(`startPoint=${startPoint}, maxWay=${maxWay}`);
  if ((maxWay = 0)) {
    return result;
  }

  //
  //
  return result;
};

// console.log(snail([[]]));

// console.log(snail([[1]]));

console.log(
  snail([
    [1, 2],
    [4, 5],
  ]),
);

console.log(
  snail([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
);
