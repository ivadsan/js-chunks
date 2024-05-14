const foo = ['a', 'b','c','d', 'e']

// insertar un valor al final del array
foo.push('f')
console.log(foo) // [ 'a', 'b', 'c', 'd', 'e', 'f' ]

// Eliminar el último valor del array
const removedValueUsingPop =  foo.pop()
console.log(foo) // [ 'a', 'b', 'c', 'd', 'e' ]
console.log('removed value using pop', removedValueUsingPop)

// Agregar un valor al inicio del array
foo.unshift('aa')
console.log(foo) // [ 'aa', 'a', 'b', 'c', 'd', 'e' ]

// Eliminar el primer elemento del array
const removedValueUsingShift =  foo.shift()
console.log(foo) // [ 'a', 'b', 'c', 'd', 'e' ]
console.log('removed value using shift', removedValueUsingShift)

// Concatenar un array
const bar = ['f', 'g', 'h', 'i']
const newArray = foo.concat(bar)
console.log(newArray)  // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']

// Reversar la posición de los valores de un array
const reverseArr = newArray.reverse() 
console.log(reverseArr) // ['i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a']


// Ordenar valores de un array
const sortArr = reverseArr.sort()
console.log(sortArr) // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']





