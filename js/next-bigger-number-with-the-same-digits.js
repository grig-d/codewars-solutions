// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:
// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// nextBigger(num: 12)   // returns 21
// nextBigger(num: 513)  // returns 531
// nextBigger(num: 2017) // returns 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):
// 9 ==> -1
// 111 ==> -1
// 531 ==> -1

function nextBigger(n) {
  const nums = n.toString().split('');

  for (let i = 0; i < nums.length - 1; i++) {

    // let newNum;
    console.log(nums, [nums[nums.length - 1 - i], nums[nums.length - 1 - i - 1]]);
    // splice
    // console.log(revChar(numArr));
  }
  return -1;
}

function revChar(arr) {
  const result = 1;
  return parseInt([...arr].reverse().join(''));
}

console.log(nextBigger(12), 21);
console.log(nextBigger(513), 531);
console.log(nextBigger(2017), 2071);
console.log(nextBigger(414), 441);
console.log(nextBigger(144), 414);

// 2017
// 2-0-1-7 reverse1 2-0-[7-1] > 2017 ? return 2071 : not
// 2-0-1-7 reverse2 2-[1-0]-7 > 2017 ? return 2107 : not
// 2-0-1-7 reverse3 [0-2]-1-7 > 2017 ? return 0217 : not return -1

let arrr = [0,1,2,3,4];
console.log([...arrr].splice(0, 0)); // []
console.log([...arrr].splice(0, 1)); // [0]
console.log([...arrr].splice(1, 1)); // [1]
console.log([...arrr].splice(1, 0)); // []
console.log([...arrr].splice(0, 2)); // [0, 1]
console.log([...arrr].splice(0, 3)); // [0, 1, 2]
console.log([...arrr].splice(3, 1)); // [3]
