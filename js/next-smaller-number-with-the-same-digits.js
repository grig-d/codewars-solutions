/*
Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits. For example:
nextSmaller(21) == 12
nextSmaller(531) == 513
nextSmaller(2071) == 2017
Return -1 (for Haskell: return Nothing, for Rust: return None), when there is no smaller number that contains the same digits.
Also return -1 when the next smaller number with the same digits would require the leading digit to be zero.
nextSmaller(9) == -1
nextSmaller(111) == -1
nextSmaller(135) == -1
nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros
some tests will include very large numbers.
test data only employs positive integers.
The function you write for this challenge is the inverse of this kata: "Next bigger number with the same digits."
*/

function nextSmaller(n) {
  const inputArray = [...`${n}`];
  let curIndex = inputArray.length - 1;
  let baseChar, rightSorted;

  while (curIndex > 0) {
    curIndex -= 1;
    baseChar = inputArray[curIndex];
    rightSorted = inputArray
      .slice(curIndex + 1)
      .filter(element => element < baseChar)
      .sort()
      .reverse();
    if (curIndex === 0) {
      rightSorted = rightSorted.filter(element => element > 0);
    }
    if (rightSorted.length > 0) {
      const leftArray = inputArray.slice(0, curIndex);
      const rightArray = inputArray.slice(curIndex + 1);
      rightArray[rightArray.indexOf(rightSorted[0])] = baseChar;
      baseChar = rightSorted[0];
      return Number(
        [...leftArray, baseChar, ...rightArray.sort().reverse()].join(''),
      );
    }
  }
  return -1;
}

console.log(`21 ==> ${nextSmaller(21)}`); // 12
console.log(`907 ==> ${nextSmaller(907)}`); // 790
console.log(`531 ==> ${nextSmaller(531)}`); // 513
console.log(`135 ==> ${nextSmaller(135)}`); // -1
console.log(`2071 ==> ${nextSmaller(2071)}`); // 2017
console.log(`1027 ==> ${nextSmaller(1027)}`); // -1
console.log(`414 ==> ${nextSmaller(414)}`); // 144
console.log(`123456798 ==> ${nextSmaller(123456798)}`); // 123456789
console.log(`123456789 ==> ${nextSmaller(123456789)}`); // -1
console.log(`1234567908 ==> ${nextSmaller(1234567908)}`); // 1234567890
