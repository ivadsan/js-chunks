const product = {
  name: "computer",
  available: true,
  price: 300,
};
const user = {
  name: "Ivan",
  age: 40,
};

// Es mutable el nuevo objeto
// const order = {
//   product,
//   user,
// };

// user.name = "Dario";
// console.log(order);

//output

// {
//     product: { name: 'computer', available: true, price: 300 },
//     user: { name: 'Dario', age: 40 }
//  }

//------------------------------

// inmutabilidad
// const order = {
//   product: { ...product },
//   user: { ...user },
// };

// user.name = "Dario";
// console.log(order);

//output

// {
//     product: { name: 'computer', available: true, price: 300 },
//     user: { name: 'Ivan', age: 40 }
//  }

//-------------------------

// aunque hay inmutabilidad se pierde la propiedad name del primer objeto destructurado
// por que se sobre escribe con la destructuracion del segundo objeto

// const order = {
//   ...product,
//   ...user,
// };

// console.log(order);

// output

//{ name: 'Ivan', available: true, price: 300, age: 40 }

//------------------------

// const order = {
//   ...product,
//   productName: product.name,
//   ...user,
// };

// console.log(order);

// output

// {
//     name: 'Ivan',
//     available: true,
//     price: 300,
//     productName: 'computer',
//     age: 40
// }

// ------------------------
// usando Object.assign()

// const order = Object.assign(product, user);
// console.log(order) // { name: 'Ivan', available: true, price: 300, age: 40 }
