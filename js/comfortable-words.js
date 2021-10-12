// A comfortable word is a word which you can type always alternating the hand you type with (assuming you type using a QWERTY keyboard and use fingers as shown in the image below).

// That being said, complete the function which receives a word and returns true if it's a comfortable word and false otherwise.

// The word will always be a string consisting of only ascii letters from a to z.

// To avoid problems with image availability, here's the lists of letters for each hand:

// Left: q, w, e, r, t, a, s, d, f, g, z, x, c, v, b
// Right: y, u, i, o, p, h, j, k, l, n, m

// "yams"  -->  true
// "test"  -->  false

const comfortable_word = word => {
  const ar1 = [...word].filter((e, i) => i % 2 === 0);
  const ar2 = [...word].filter((e, i) => i % 2 !== 0);
  const LEFT = 'q, w, e, r, t, a, s, d, f, g, z, x, c, v, b';
  const RIGHT = 'y, u, i, o, p, h, j, k, l, n, m';

  return (
    (ar1.filter(e => LEFT.includes(e)).length === ar1.length &&
      ar2.filter(e => RIGHT.includes(e)).length === ar2.length) ||
    (ar1.filter(e => RIGHT.includes(e)).length === ar1.length &&
      ar2.filter(e => LEFT.includes(e)).length === ar2.length)
  );
};

console.log(comfortable_word('yams'));
console.log(comfortable_word('test'));
