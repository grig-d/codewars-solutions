/*
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
*/

function nextBigger(n) {
  const inputArray = [...`${n}`];
  let curIndex = inputArray.length - 1;
  let baseChar, rightSorted;

  while (curIndex > 0) {
    curIndex -= 1;
    baseChar = inputArray[curIndex];
    rightSorted = inputArray
      .slice(curIndex + 1)
      .filter(element => element > baseChar)
      .sort();
    if (rightSorted.length > 0) {
      const leftArray = inputArray.slice(0, curIndex);
      const rightArray = inputArray.slice(curIndex + 1);
      rightArray[rightArray.indexOf(rightSorted[0])] = baseChar;
      baseChar = rightSorted[0];
      return Number([...leftArray, baseChar, ...rightArray.sort()].join(''));
    }
  }
  return -1;
}

console.log(`12 ==> ${nextBigger(12)}`); // 21
console.log(`513 ==> ${nextBigger(513)}`); // 531
console.log(`2017 ==> ${nextBigger(2017)}`); // 2071
console.log(`414 ==> ${nextBigger(414)}`);
console.log(`144 ==> ${nextBigger(144)}`);
console.log(`9 ==> ${nextBigger(9)}`);
console.log(`111 ==> ${nextBigger(111)}`);
console.log(`531 ==> ${nextBigger(531)}`);
console.log(`954472 ==> ${nextBigger(954472)}`);
