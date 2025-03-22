console.log("************** PRACTICE 1 *********************");

function biggestWord(phrase) {
  const arrayLetters = phrase.split(" ");
  return arrayLetters.reduce(
    (max, word) => (word.length > max.length ? word : max),
    ""
  );
}
console.log(biggestWord("Esta frase puede contener muchas palabras"));
console.log(biggestWord("Ejercicios básicos de JavaScript"));

console.log("************** PRACTICE 2 *********************");

function printAverage(classResults) {
  const grades = values(classResults);
  const average = calcularMedia(grades);
  console.log(`La media de la clase es: ${getGradeAverage(average)}`);
}

function calcularMedia(notas) {
  const suma = notas.reduce((acc, nota) => acc + nota, 0);
  return suma / notas.length;
}

function getGradeAverage(average) {
  if (average === 10) return "Matrícula de Honor";
  if (average >= 9) return "Sobresaliente";
  if (average >= 7) return "Notable";
  if (average >= 6) return "Bien";
  if (average >= 5) return "Suficiente";
  if (average >= 4) return "Insuficiente";
  return "Muy deficiente";
}

const eso2o = {
  David: 8.25,
  Maria: 9.5,
  Jose: 6.75,
  Juan: 5.5,
  Blanca: 7.75,
  Carmen: 8,
};

printAverage(eso2o);

console.log("************** PRACTICE 3 *********************");

function f(input) {
  return input === null ? "" : input || "Unknown";
}

console.log(f(null));
console.log(f(undefined));
console.log(f("Input string"));

console.log("************** PRACTICE 4 *********************");

var a = { name: "Maria", surname: "Ibañez", country: "SPA" };
var b = { name: "Luisa", age: 31, married: true };
// Apartado A
function clone(source) {
  return { ...source };
}

console.log(clone(a));

// Apartado B
function merge(source, target) {
  return { ...clone(target), ...clone(source) };
}

console.log(merge(a, b));

console.log("************** PRACTICE 5 *********************");

// Apartado A
function isEqual(a, b) {
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  return keysA.every((key) => b.hasOwnProperty(key) && a[key] === b[key]);
}

var user = { name: "María", age: 30 };
var clonedUser = { name: "María", age: 30 };

console.log(user === clonedUser);
console.log(isEqual(user, clonedUser));

//Apartado B
function isDeepEqual(a, b) {
  if (
    typeof a !== "object" ||
    typeof b !== "object" ||
    a === null ||
    b === null
  ) {
    return a === b;
  }

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  return keysA.every(
    (key) => b.hasOwnProperty(key) && isDeepEqual(a[key], b[key])
  );
}

var user = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
};
var clonedUser = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
};

console.log(isDeepEqual(user, clonedUser));

console.log("************** PRACTICE 6 *********************");

function dices() {
  let dice1 = null;
  let dice2 = null;

  return {
    roll: function () {
      dice1 = Math.floor(Math.random() * 6) + 1;
      dice2 = Math.floor(Math.random() * 6) + 1;
      this.showMessage();
    },
    reset: function () {
      dice1 = null;
      dice2 = null;
      console.log("Dices have been reset.");
    },
    showMessage: function () {
      if (dice1 === null || dice2 === null) {
        console.log("You must throw dices first.");
      } else {
        console.log(`Results: Dice 1 = ${dice1}, Dice 2 = ${dice2}`);
        if (dice1 === 6 && dice2 === 6) {
          console.log("¡Double 6! ¡You win a prize!");
        }
      }
    },
  };
}

const diceGame = dices();
console.log(diceGame.roll());
console.log(diceGame.roll());
console.log(diceGame.reset());
console.log(diceGame.showMessage());

console.log("************** PRACTICE 7 *********************");

console.log("************** PRACTICE 8 *********************");

function includes(array, value) {
  return array.indexOf(value) !== -1;
}

console.log(includes([1, 2, 3], 3));
console.log(includes([1, 2, 3], 0));

console.log("************** PRACTICE 9 *********************");

function isPrime(num) {
  if (num < 2) return false;
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function showPrimes(from, to) {
  for (var i = from; i <= to; i++) {
    if (isPrime(i)) {
      console.log(i + " is PRIME!");
    } else {
      console.log(i + " is not a prime");
    }
  }
}

showPrimes(1, 10);

console.log("************** PRACTICE 10 *********************");

function isBookRead(books, titleToSearch) {
  for (let i in books) {
    if (books[i].title === titleToSearch) {
      return books[i].isRead;
    }
  }
  return false;
}

var books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

console.log(isBookRead(books, "Devastación"));
console.log(isBookRead(books, "Canción de hielo y fuego"));
console.log(isBookRead(books, "Los Pilares de la Tierra"));

console.log("************** PRACTICE 11 *********************");

function reverseText(text) {
  return text.split(" ").reverse().join(" ");
}

console.log(reverseText("Uno dos tres"));

console.log("************** PRACTICE 12 *********************");

function subsets(word) {
  const result = [];
  for (let i = 1; i < word.length; i++) {
    result.push(word.slice(i));
  }
  return result;
}

console.log(subsets("message"));
// Challenge

function subsetsCh(word) {
  return [...Array(word.length)].map((_, i) => word.slice(i));
}

console.log(subsetsCh("message"));

console.log("************** PRACTICE 13 *********************");

var surname = "Pérez";
var person = {
  name: "Juan",
  surname: "González",
  wife: {
    name: "Ana",
    surname: "Jiménez",
    getSurname: function () {
      return this.surname;
    },
  },
};

console.log(person.wife.getSurname()); // Jimenez
var surnameFunction = person.wife.getSurname;
// console.log(surnameFunction()); // undefined
console.log(surnameFunction.call(person)); // González

console.log("************** PRACTICE 14 *********************");

export function values(obj) {
  return Object.keys(obj).map((key) => obj[key]);
}

console.log(
  values({ id: 31, duration: 310, name: "long video", format: "mp4" })
);

// Challenge
function valuesChanllenge(obj) {
  return Object.keys(obj)
    .filter((key) => obj.hasOwnProperty(key))
    .map((key) => obj[key]);
}

function Person(name) {
  this.name = name;
}

Person.prototype.walk = function () {
  console.log("I'm walking");
};

var john = new Person("John");
console.log(valuesChanllenge(john));

console.log("************** PRACTICE 15 *********************");

function zipObject(keys, values) {
  return keys.reduce((obj, key, index) => {
    obj[key] = values[index]; // Asigna cada clave a su valor correspondiente
    return obj;
  }, {});
}

console.log(
  zipObject(["spanish", "english", "french"], ["hola", "hi", "salut"])
);

// Challenge
function zipObjectCh(keys, values) {
  return keys.reduce((obj, key, index) => {
    if (index < values.length) {
      obj[key] = values[index];
    }
    return obj;
  }, {});
}

console.log(zipObjectCh(["spanish", "english", "french"], ["hola"]));

console.log("************** PRACTICE 16 *********************");
var secret =
  "': rg!qg yq,urae: ghsrf wuran shrerg jq,u'qf ra r' ,qaq' er g'q,o rg,fuwurae: m!hfua( t'usqfuq ,:apu(:m xv";
function decrypt(secret) {
  var plain = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
  var cipher = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

  return secret
    .split("")
    .map((char) => {
      let index = cipher.indexOf(char);
      return index !== -1 ? plain[index] : char;
    })
    .join("");
}

console.log(decrypt(secret));
