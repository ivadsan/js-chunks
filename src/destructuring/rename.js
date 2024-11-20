const foo = {
  a: "b",
  c: "d",
  e: "f",
  g: "h",
  i: "j",
  k: {
    l: "m",
    n: "o",
  },
};

//rename
const { a: b } = foo;

console.log(b); // b

// deep destructuring
const {
  k: { l },
} = foo;
console.log(l); // m

// deep rename
const {
  k: { n: z },
} = foo;
console.log(z);
