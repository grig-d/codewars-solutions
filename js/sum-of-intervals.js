/*
Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, and returns the sum of all the interval lengths. 
Overlapping intervals should only be counted once.

Intervals
Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. 
Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

Overlapping Intervals
List containing overlapping intervals:

[
   [1,4],
   [7, 10],
   [3, 5]
]
The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.

Examples:
sumIntervals( [
   [1,2],
   [6, 10],
   [11, 15]
] ) => 9

sumIntervals( [
   [1,4],
   [7, 10],
   [3, 5]
] ) => 7

sumIntervals( [
   [1,5],
   [10, 20],
   [1, 6],
   [16, 19],
   [5, 11]
] ) => 19

sumIntervals( [
   [0, 20],
   [-100000000, 10],
   [30, 40]
] ) => 100000030
Tests with large intervals
Your algorithm should be able to handle large intervals. All tested intervals are subsets of the range [-1000000000, 1000000000].
*/

function sumIntervals(intervals) {
  let currentArray = [...intervals];
  let sum = 0;
  let first = currentArray.shift();
  while (currentArray.length) {
    const second = currentArray.find(el => isOverlap(first, el));
    if (second) {
      // join if second is overlapping with first
      // and replace second with new
      currentArray[currentArray.indexOf(second)] = joinIntervals(first, second);
    } else {
      sum += first[1] - first[0];
    }
    first = currentArray.shift();
  }
  sum += first[1] - first[0];
  return sum;
}

function isOverlap(a, b) {
  // input 2 arrays and check if overlapping
  // rule for no overlapping: a.first > b.last OR a.last < b.first
  // return boolean: true - is overlapping; false - no overlapping
  return !(a[0] > b[1] || a[1] < b[0]);
}

function joinIntervals(a, b) {
  const args = [...a, ...b];
  const interval = [Math.min(...args), Math.max(...args)];
  return interval;
}

console.log(sumIntervals([[1, 5]]));
// 4

console.log(
  sumIntervals([
    [1, 5],
    [6, 10],
  ]),
);
// 8

console.log(
  sumIntervals([
    [1, 5],
    [1, 5],
  ]),
);
// 4

console.log(
  sumIntervals([
    [1, 4],
    [7, 10],
    [3, 5],
  ]),
);
// 7

console.log(
  sumIntervals([
    [1, 2],
    [6, 10],
    [11, 15],
  ]),
);
// 9

console.log(
  sumIntervals([
    [1, 5],
    [10, 20],
    [1, 6],
    [16, 19],
    [5, 11],
  ]),
);
// 19

console.log(
  sumIntervals([
    [0, 20],
    [-100000000, 10],
    [30, 40],
  ]),
);
// 100000030

console.log(sumIntervals([[-1e9, 1e9]]));
// 2e9

console.log(
  sumIntervals([
    [0, 20],
    [-1e8, 10],
    [30, 40],
  ]),
);
// 1e8 + 30
