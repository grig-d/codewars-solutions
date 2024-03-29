/*
Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.
Example:
Given an input string of:

apples, pears # and bananas
grapes
bananas !apples
The output expected would be:

apples, pears
grapes
bananas
The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
result should == "apples, pears\ngrapes\nbananas"
*/

function solution(input, markers) {
  const rows = input.split('\n');
  for (let i = 0; i < markers.length; i++) {
    for (let j = 0; j < rows.length; j++) {
      rows[j] = rows[j].split(markers[i])[0].trim();
    }
  }
  return rows.join('\n');
}

console.log(
  solution('apples, plums % and bananas\npears\noranges !applesauce', [
    '%',
    '!',
  ]),
);

// ("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"], "apples, plums\npears\noranges")
// ("Q @b\nu\ne -e f g", ["@", "-"], "Q\nu\ne")

// not my solution:
// function solution(input, markers) {
//   return input.split('\n').map(line => markers.reduce((line, marker) => line.split(marker)[0].trim(), line)).join('\n')
// }
