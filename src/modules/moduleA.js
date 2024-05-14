const value1 = 50
exports.value1 = value1

console.log(module)
// {
//   id: ".",
//   path: "...",
//   exports: { value1: 50 },
//   parent: null,
//   filename: "...",
//   loaded: false,
//   children: [],
//   paths: [
//     ...
//   ],
// }

const function1 = function() {
  console.log("I am a function")
}
module.exports = { function1, ...module.exports }
module.exports = {value1, value2: value1, ...module.exports }

console.log(module.exports)
console.log(exports)
