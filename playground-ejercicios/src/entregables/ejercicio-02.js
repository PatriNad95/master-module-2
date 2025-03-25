console.log("************** DELIVERABLE 02 *********************");
const lettersArray = ["P", "A", "T", "R", "I"];
const moreletters = ["C", "I", "A"];
const lastLetters = ["S", "A", "N"];
const finalLetters = ["C", "H", "E", "Z"];

// CONCAT

const concat = (a, b) => [...a, ...b];

const resultConcat = concat(lettersArray, moreletters);
console.log(resultConcat);

// Optional
const concatMultiple = (...arrays) =>
  arrays.reduce((acc, curr) => [...acc, ...curr], []);

const resultConcatMultiple = concatMultiple(
  lettersArray,
  moreletters,
  lastLetters,
  finalLetters
);
console.log(resultConcatMultiple);
