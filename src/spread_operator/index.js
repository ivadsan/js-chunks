function sumAll(...nums) {
  let result = 0;
  for (let index = 0; index < nums.length; index++) {
    result += nums[index];
  }
  console.log(result);
}

sumAll(1,2,3,4,5)