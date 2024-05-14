//  Modelo de delegación de objetos

// prototipo base lo contienen todos los objetos

Object.prototype;

// function constructora

function User(name, age) {
  this.name = name;
  this.age = age;
  this.status = true;
}

const ivan = new User("Ivan Dario", 38);

// prototype chain

const nata = {
  name: "Nataly",
  age: 35,
};

const matias = {
  name: "Matias",
  age: 7,
};

const job = {
  type: "artist",
  country: "colombia",
};

// Por objeto se entiende todo lo que no sea un valor primitivo, cuando trabajamos con ellos implicitamente estamos trabajando con el modelo de delegación de objetos

Object.setPrototypeOf(nata, job);
console.log(nata.type); // artist

// ambos objeto tienen el mismo prototipo base
console.log(nata.toString === matias.toString); // true

// Ya sean objetos, arrays, funciones, dates o regex cada uno  tiene un prototipo delegado según sea el tipo (Array.prototype, Function.prototype), y este a su vez viene del prototipo Object.prototype
// Estos prototipos especificos aunque tengan métodos con los mismos nombres provenientes de Object.prototype, son reescritos según sus necesidades, si los comparamos entre los diferentes tipos de objeto podemos ver que ya no hacen parte de la misma referencia

const foo = { a: "d", b: "e", c: "f" };
console.log(foo.toString === nata.toString); // true Entre objetos son iguales pero...

const bar = [1, 2, 3, 4, 5];
console.log(foo.toString === bar.toString); // no son iguales ya que el método to string ha sido reescrito Array.toString

// class

// en las clases sucede el modelo de delegacion de objetos  cuando con la funcion constructora  ejecutamos  el operador new
// new crea un {} vacio y la funcion constructora apunta su this a este objeto
// ahora lo que parece herencia no es mas que el atributo oculto __proto__ que se crea en la nueva instancia con la funcion constructora

const adrian = new User("Adrian", 19);

// primero se crea un objeto vacio {},
// segundo  crea el prototipo de la clase {__proto__: User.prototype}
// tercero Invoca la funcion constructora  con este objeto para el valor de this
// Ejecuta el cuerpo de la funcion constructora
// retorna de manera implicita el nuevo objeto

// Aqui la cadena de prototipos seria Adrian -> User.prototype -> Object.prototype

// Ahora podriamos afectar el prototipo  de la función constructora agregando un método o atributo
// y tendriamos disponible este metodo o atributo para todas las instancias creadas con la funcion

User.prototype.saludar = function () {
  console.log(`Hello my name is ${this.name}`);
};

ivan.saludar();
adrian.saludar();

// Si queremos saber si un objeto es instancia de otro entonces

adrian instanceof User; // true

adrian instanceof Object; // true

// la cadena de prototipos se recorre cuando se lee una propiedad pero no en la asignacion
