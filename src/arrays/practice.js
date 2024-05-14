const foo = [1,2,3,4,5]

//reduce
const res1 = foo.reduce((acc, cur)=> acc = cur + acc ,0)
console.log(res1)

//includes
const res2 = foo.includes(6)
console.log(res2)

//find
const res3 = foo.find((item)=>item >2 && item < 6)
console.log(res3)

//filter
const res4 = foo.filter((item)=>item >2 && item < 6)
console.log(res4)

//map
const res5 = foo.map((item)=> item * 2)
console.log(res5)


const res6 = foo.pop()
console.log(res6, foo)

const res7 = foo.shift()
console.log(res7, foo)
