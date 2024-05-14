const foo = [1, 2, 3, 4, 5];

//reduce
const res1 = foo.reduce((acc, cur) => (acc = cur + acc), 0);
console.log(res1); //15

const bzc = ["t", "e", "s", "t"];
const xyz = bzc.reduce((acc, item) => (acc = acc + item), "");
console.log(xyz); // test

//includes
const res2 = foo.includes(6);
console.log(res2); // false

//find
const res3 = foo.find((item) => item > 2 && item < 6);
console.log(res3); // 3

//filter
const res4 = foo.filter((item) => item > 2 && item < 6);
console.log(res4); // [3,4,5]

//map
const res5 = foo.map((item) => item * 2);
console.log(res5); // [2,4,6,8,10]

const res6 = foo.pop();
console.log(res6, foo); // 5

const res7 = foo.shift();
console.log(res7, foo); // 1
