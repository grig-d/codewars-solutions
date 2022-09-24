/*
Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
 [4,5,6],
 [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
 [8,9,4],
 [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]

NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].
*/

snail = function (array) {
  let result = [];
  let matrix = [...array];
  let currentResult, currentMatrix;
  do {
    [currentResult, currentMatrix] = decreaseMatrix(matrix);
    result = [...result, ...currentResult];
    matrix = [...currentMatrix];
  } while (matrix.length > 0);

  return result;
};

function decreaseMatrix(matrix) {
  // n is for n x n
  const n = matrix[0].length;
  let decreasedMatrix = [...matrix];
  // peelTop
  let peelTop = [...decreasedMatrix.shift()];
  // peelBottom
  let peelBottom = [];
  if (n > 1) {
    peelBottom = [...decreasedMatrix.pop().reverse()];
  }
  // peelRight & peelLeft if n > 2
  let peelRight = [];
  let peelLeft = [];
  if (n > 2) {
    peelRight = decreasedMatrix.map(row => row.pop());
    peelLeft = decreasedMatrix.map(row => row.shift()).reverse();
  }
  let snail = [...peelTop, ...peelRight, ...peelBottom, ...peelLeft];
  return [snail, decreasedMatrix];
}

console.log(snail([[]]));
// []

console.log(snail([[1]]));
// [1]

console.log(
  snail([
    [1, 2],
    [4, 5],
  ]),
);
// [1, 2, 5, 4]

console.log(
  snail([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
);
// [1, 2, 3, 6, 9, 8, 7, 4, 5]

console.log(
  snail([
    [1, 2, 3, 1],
    [4, 5, 6, 4],
    [7, 8, 9, 7],
    [7, 8, 9, 7],
  ]),
);
// [1, 2, 3, 1, 4, 7, 7, 9, 8, 7, 7, 4, 5, 6, 9, 8]

console.log(
  snail([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ]),
);
// [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]

console.log(
  snail([
    [1, 2, 3, 4, 5, 6],
    [20, 21, 22, 23, 24, 7],
    [19, 32, 33, 34, 25, 8],
    [18, 31, 36, 35, 26, 9],
    [17, 30, 29, 28, 27, 10],
    [16, 15, 14, 13, 12, 11],
  ]),
);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]
