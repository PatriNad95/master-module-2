console.log("************** DELIVERABLE 03 *********************");
var a = { name: "Maria", surname: "Ibañez", country: "SPA" };
var b = { name: "Luisa", age: 31, married: true };
// Clone
function clone(source) {
  return { ...source };
}
const resultClone = clone(a);
console.log(resultClone);

// Merge
function merge(source, target) {
  return { ...clone(target), ...clone(source) };
}

const resultMerge = merge(a, b);
console.log(resultMerge);
