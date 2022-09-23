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

snail = function (array) {
  const result = [];

  // n is number of rows (columns), n x n
  // const n = arr[0].length;

  let currentMatrix = [...arr];

  return result;
};

function decreaseMatrix(array) {
  const n = array[0].length;
  let snail = [];
  let decreasedMatrix = [...array];
  // peelTop
  snail = [...decreasedMatrix.shift()];
  // peelBottom
  let peelBottom = [];
  if (n > 1) {
    peelBottom = [...decreasedMatrix.pop().reverse()];
  }
  // peelRight & peelLeft if n > 2
  let peelRight = [];
  let peelLeft = [];
  if (n > 2) {
    //----------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    console.log('inner decreasedMatrix', decreasedMatrix);
    peelRight = decreasedMatrix.map(row => row.pop());
    peelLeft = decreasedMatrix.map(row => row.shift());
    console.log('right', peelRight);
    console.log('left', peelLeft);
  }

  snail = [...snail, ...peelRight, ...peelBottom, ...peelLeft];

  console.log('decreasedMatrix', decreasedMatrix);
  console.log('snail', snail);
  return decreasedMatrix;
}

// const ar2 = [
//   [1, 2],
//   [4, 5],
// ];
const ar2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
decreaseMatrix(ar2);
// *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
// const arr = [[]];
// const arr = [[1]];
// const arr = [
//   [1, 2],
//   [4, 5],
// ];
/*
const lastElem = arr.pop().reverse();
const preLastElem = arr.flatMap(e => e);
const res = [...preLastElem, ...lastElem];
console.log('lastElem', lastElem);
console.log('preLastElem', preLastElem);
console.log('res', res);
console.log('arr', arr, 'length', arr.length);
*/
// *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***

// console.log(snail([[]]));
// []

// console.log(snail([[1]]));
// [1]

// console.log(
//   snail([
//     [1, 2],
//     [4, 5],
//   ]),
// );
// [1, 2, 5, 4]

// console.log(
//   snail([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ]),
// );
// [1, 2, 3, 6, 9, 8, 7, 4, 5]

// console.log('* * *');
// function recursion (num) {
//   console.log(num);
//   num -= 1;
//   if(num > 0 ) {recursion (num)}
// }
// recursion (3);
