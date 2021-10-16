// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.

function high(x) {
  let wordsArr = x.split(' ');
  let maxScore = 0;
  let result;
  wordsArr
    .map(word =>
      word
        .split('')
        .map(el => el.charCodeAt(0) - 96)
        .reduce((prev, cur) => prev + cur),
    )
    .forEach((score, ind) => {
      if (score > maxScore) {
        maxScore = score;
        result = wordsArr[ind];
      }
    });
  return result;
}
console.log(high('man i need a taxi up to ubud')); //taxi
