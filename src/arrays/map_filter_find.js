const fruits = [
  { name: "apple", price: 1000 },
  { name: "orange", price: 500 },
  { name: "banana", price: 400 },
  { name: "blackberry", price: 100 },
];

const cheapFruits = fruits.filter((fruit) => fruit.price < 500);
console.log(cheapFruits); //[{ name: 'blackberry', price: 100 }, { name: 'banana', price: 400 } ]

const newFruits = fruits.map((fruit) => fruit.name);
console.log(newFruits); // [ 'apple', 'orange', 'blackberry', 'banana' ]

const firstCheapFruits = fruits.find((fruit) => fruit.price < 500); // return the first element found
console.log("find result: ", firstCheapFruits); // find result:  { name: 'banana', price: 400 }

const testFruits = fruits.forEach((fruit) => fruit.name); // No return []
console.log(testFruits); // undefined

const mostExpensive = fruits.some((fruit) => fruit.price === 1100);
console.log("mostExpensive result: ", mostExpensive); // false
