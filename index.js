// 'xsdlafqpcmjytoikojsecamgdkehrqqgfknlhoudqygkbxftivfbpxhxtqgpkvsrfflpgrlhkbfnyftwkdebwfidmpauoteahyh' = 'acdeghlmnqrvyz'

// let str = "zzzab"
// str = "azab"
// str = "bzb"
// str = "cz"

// const CHECK =
//   'xsdlafqpcmjytoikojsecamgdkehrqqgfknlhoudqygkbxftivfbpxhxtqgpkvsrfflpgrlhkbfnyftwkdebwfidmpauoteahyh';

// function lastSurvivors(str) {
//   let charCodeArray = str
//     .toLowerCase()
//     .split('')
//     .map(el => el.toString().charCodeAt(0));

//   do {
//     charCodeArray = [...checkTwink(charCodeArray)];
//   } while (charCodeArray.length !== checkTwink(charCodeArray).length);

//   let result = charCodeArray
//     .map(el => String.fromCharCode(el))
//     .sort()
//     .join('');
//   return result;
// }

// function checkTwink(updCharCodeArr) {
//   for (let i = 0; i < updCharCodeArr.length - 1; i++) {
//     let firstElement = updCharCodeArr[i];
//     for (let j = i + 1; j < updCharCodeArr.length; j++) {
//       let secondElement = updCharCodeArr[j];
//       if (firstElement == secondElement) {
//         let newCharCode = updCharCodeArr[i] == 122 ? 97 : ++updCharCodeArr[i];
//         updCharCodeArr.splice(j, 1);
//         updCharCodeArr.splice(i, 1, newCharCode);
//         return updCharCodeArr;
//       }
//     }
//   }
//   return updCharCodeArr;
// }

// console.log(lastSurvivors(CHECK));

// Travelling on a Grid

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
  const arrCoords = s
    .replaceAll('(', '')
    .replaceAll(')', ' ')
    .split(' ')
    .filter(e => parseInt(e));

  const x = Math.abs(arrCoords[2] - arrCoords[0]);
  const y = Math.abs(arrCoords[3] - arrCoords[1]);

  const arrDiff = [x, y];
  const diff = y - x;

  let result = 1 + y + arProg(y)*(x-1);

  return result;
}

// console.log(
//   travelChessboard('(1 1)(1 2)'),
//   1,
//   travelChessboard('(1 1)(1 2)') === 1,
// );
console.log(
  travelChessboard('(1 1)(1 3)'),
  1,
  travelChessboard('(1 1)(1 3)') === 1,
);
console.log(
  travelChessboard('(1 1)(2 2)'),
  2,
  travelChessboard('(1 1)(2 2)') === 2,
);
console.log(
  travelChessboard('(1 1)(2 3)'),
  3,
  travelChessboard('(1 1)(2 3)') === 3,
);
console.log(
  travelChessboard('(1 1)(3 3)'),
  6,
  travelChessboard('(1 1)(3 3)') === 6,
);
console.log(
  travelChessboard('(2 2)(4 5)'),
  10,
  travelChessboard('(2 2)(4 5)') === 10,
);
console.log(
  travelChessboard('(2 3)(4 8)'),
  21,
  travelChessboard('(2 3)(4 8)') === 21,
);
console.log(
  travelChessboard('(1 8)(4 8)'),
  1,
  travelChessboard('(1 8)(4 8)') === 1,
);

function arProg(number) {
  if (number < 0) {
    return;
  }

  if (number === 0) {
    return number;
  }
  return number != 1 ? number + arProg(number - 1) : 1;
}
