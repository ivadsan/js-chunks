const foo = [1, 2, 3];
foo[10] = 4;
foo[5] = 4;

console.log(foo.length); // 11
console.log(foo); // [ 1, 2, 3, <2 empty items>, 4, <4 empty items>, 4 ]
