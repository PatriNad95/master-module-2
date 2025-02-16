const letterArray = ["P", "A", "T", "R", "I"];

// HEAD
const head = ([first]) =>
  console.log("Devuelve el primer elemento del array", first);

head(letterArray);

// TAIL

const tail = ([_first, ...letters]) =>
  console.log("Devuelve los elementos del array menos el primero", letters);

tail(letterArray);

// INIT

const init = (letters = []) =>
  console.log(
    "Devuelve los elementos del array menos el último",
    letters.slice(0, -1)
  );

init(letterArray);

// LAST

const last = (letters = []) =>
  console.log("Devuelve el último elemento del array", letters.pop());

last(letterArray);
