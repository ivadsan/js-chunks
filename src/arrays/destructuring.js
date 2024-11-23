const foo = [2, 4, 5, 6, 8];

const [a, b, c] = foo;

console.log(c);

const [, , , d] = foo;
console.log(d);

let e = foo[4]; // inmutable

console.log(e);

e = 9;
console.log(foo); // [ 2, 4, 5, 6, 8 ]

foo[4] = 10; // mutable

console.log(foo); //[ 2, 4, 5, 6, 10 ]
