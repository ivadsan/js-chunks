// destructuring in constants and new objects

const foo = {
  a: "b",
  c: "d",
  e: "f",
  g: "h",
  i: "j",
};

const { a, c, e, ...bar } = foo;

console.log(bar); // { g: 'h', i: 'j' }

foo.g = "x";

console.log(bar); // { g: 'h', i: 'j' }
console.log(foo); // { a: 'b', c: 'd', e: 'f', g: 'x', i: 'j' }

// Inmutability
let { i } = foo;

i = 8;
console.log(foo); // { a: 'b', c: 'd', e: 'f', g: 'x', i: 'j' }
console.log(i); // 8

let baz = { ...foo, a };
baz.g = "y";
console.log(baz); // { a: 'b', c: 'd', e: 'f', g: 'y', i: 'j' }
console.log(foo); // { a: 'b', c: 'd', e: 'f', g: 'x', i: 'j' }

let { ...xyz } = foo;
xyz.g = "z";
console.log(xyz); // { a: 'b', c: 'd', e: 'f', g: 'z', i: 'j' }
console.log(foo); // { a: 'b', c: 'd', e: 'f', g: 'x', i: 'j' }

//rename key
const { a: z } = foo;
console.log(z); // b

const test = { ...foo, a: 1, b: 2, c: 3 };
console.log(test); // { a: 1, c: 3, e: 'f', g: 'x', i: 'j', b: 2 }
