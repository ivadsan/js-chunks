function sumar(...nums) {
  let res = 0;

  nums.forEach((num) => {
    res += num;
  });
  return res;
}

console.log(sumar(1, 2, 3, 12, 2));
