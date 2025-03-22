console.log("************** DELIVERABLE 03 *********************");
var a = { name: "Maria", surname: "Ibañez", country: "SPA" };
var b = { name: "Luisa", age: 31, married: true };
// Clone
function clone(source) {
  return { ...source };
}

console.log(clone(a));

// Merge
function merge(source, target) {
  return { ...clone(target), ...clone(source) };
}

console.log(merge(a, b));
