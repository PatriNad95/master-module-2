const letterArray = ["P", "A", "T", "R", "I"];
const moreletters = ["C", "I", "A"];
const lastLetters = ["S", "A", "N"];
const finalLetters = ["C", "H", "E", "Z"];

// CONCAT

const concat = (a, b) => {
  console.log([...a, ...b]);
};

concat(letterArray, moreletters);

// Optional
const concatMultiple = (...arrays) => {
  const result = arrays.reduce((acc, curr) => [...acc, ...curr], []);
  console.log(result);
};

concatMultiple(letterArray, moreletters, lastLetters, finalLetters);
