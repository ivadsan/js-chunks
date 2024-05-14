const foo = ['a', 'b','c','d', 'e']

// Recorrer los valores de un array
for(let i = 0; i < foo.length; i++){
    console.log(foo[i])
}


// Recorrer los valores de un array
for(let bar of foo){
    console.log(bar)
}


//Recorrer lo valores de un objeto
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}