// You have an 8x8 grid with coordinates ranging from 1 to 8. The origin (1, 1) is in the top left corner. The bottom right corner is (8, 8).
// You are given a string as an input which will contain the 2 coordinates in this format: "(x1 y1)(x2 y2)", where (x1 y1) represents point A and (x2 y2) represents point B. In the inputs provided, point A will always be up and to the left of point B. In other words, x1 < x2 and y1 < y2 will be true for every input.
// Your goal is to find out the number of different paths you can take to get from point A to point B by moving one cell at a time either down or right.

// Example
// Given an input of "(2 3)(3 5)", the number of possible paths to get from A to B is 3.

//  .  .  .  .  .  .  .  .
//  .  .  .  .  .  .  .  .
//  .  A  .  .  .  .  .  .
//  .  .  .  .  .  .  .  .
//  .  .  B  .  .  .  .  .
//  .  .  .  .  .  .  .  .
//  .  .  .  .  .  .  .  .
//  .  .  .  .  .  .  .  .
// Possible paths, marked with x:

// A .       A .       A x
// x .       x x       . x
// x B       . B       . B

function travelChessboard(s) {
  // const arrCoords = s
  //   .replaceAll('(', '')
  //   .replaceAll(')', ' ')
  //   .split(' ')
  //   .filter(e => parseInt(e));
  
  const arrCoords = s
    .replaceAll('(', '')
    .replaceAll(')', ' ')
    .split(' ')
    .filter(e => parseInt(e));

  const dX = Math.abs(arrCoords[2] - arrCoords[0]);
  const dY = Math.abs(arrCoords[3] - arrCoords[1]);

  let Max = Math.max(dX, dY);
  let Min = Math.min(dX, dY);

  let result;

  if (Min === 0) {
    return (result = 1);
  }
  if (Min === 1) {
    return (result = 1 + Max);
  }
  const arr = [1,2,3,4,5,6,7,8,9];

  for (let i = 1; i < Min; i++) {
    for (let j = 1; j <= Max; j++) {
      arr[j] = arr[j - 1] + arr[j];
      result = arr[j];
    }
  }

  return result;
}

console.log(travelChessboard('(2 3)(3 5)'));
console.log(travelChessboard('(1 1)(3 3)'));
console.log(travelChessboard('(2 2)(4 5)'));
console.log(travelChessboard('(2 3)(4 8)'));
console.log(travelChessboard('(1 8)(4 8)'));

// 0+1=1
// 1+2=3
// 3+3=6
// 6+4=10
// 10+5=15
// 15+6=21

// 0+1=1
// 1+3=4
// 4+6=10
// 10+10=20
// 20+15=35
// 35+21=56

// (1 3)(6 7) 126
// (1 1)(5 6) 126
// (2 1)(6 5) 70
// (1 1)(6 6) 252
// (3 1)(7 6) 126
// (4 1)(5 8) 8
// (3 4)(8 7) 56
// (1 1)(7 5) 210
// (3 1)(5 6) 21
// (3 1)(8 8) 792