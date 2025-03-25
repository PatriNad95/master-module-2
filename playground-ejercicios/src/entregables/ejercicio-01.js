console.log("************** DELIVERABLE 01 *********************");
const letterArray = ["P", "A", "T", "R", "I"];

// HEAD
const head = ([first]) => first;

const resultHead = head(letterArray);
console.log("Devuelve el primer elemento del array", resultHead);

// TAIL

const tail = ([_first, ...letters]) => letters;

const resultTail = tail(letterArray);
console.log("Devuelve los elementos del array menos el primero", resultTail);

// INIT

const init = (letters = []) => letters.slice(0, -1);

const resultInit = init(letterArray);
console.log("Devuelve los elementos del array menos el último", resultInit);

// LAST

const last = (letters = []) => letters.pop();

const resultLast = last(letterArray);
console.log("Devuelve el último elemento del array", resultLast);
