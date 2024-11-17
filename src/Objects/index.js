// const foo = { a: "b", c: "d", e: "f" };

// Object.freeze(foo); // No permite agregar nuevas propiedades ni modificar los valores

// foo.a = "z";
// foo.g = "h";

// console.log(foo); // { a: 'b', c: 'd', e: 'f' }

const foo = { a: "b", c: "d", e: "f" };

Object.seal(foo); // No permite agregar ni eliminar propiedades pero si modificar los valores

foo.a = "z";
foo.g = "h";

console.log(foo); // { a: 'z', c: 'd', e: 'f' }
