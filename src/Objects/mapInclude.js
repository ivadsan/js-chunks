const output = [
  { key: 8, value: "update" },
  { key: 7, value: "update" },
  { key: 9, value: "update" },
];

const result = output.map((el) => el.key).includes(8);
console.log(result);
