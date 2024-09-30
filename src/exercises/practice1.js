// Manipulación de Arrays: Escribe una función que reciba un array de objetos que representen personas (con propiedades como nombre, edad y ciudad)
// y devuelva un nuevo array filtrado solo con personas mayores de 30 años y cuyos nombres tengan más de 5 letras.

// const users = [
//   {
//     name: "Ivan",
//     age: 40,
//     city: "Bogotá",
//   },
//   {
//     name: "Nataly",
//     age: 37,
//     city: "Bogotá",
//   },
//   {
//     name: "Adrián",
//     age: 21,
//     city: "Bogotá",
//   },
//   {
//     name: "Matias",
//     age: 59,
//     city: "Bogotá",
//   },
// ];

// const filterUsers = (usersList) =>
//   usersList.filter((user) => user.age > 30 && user.name.length > 5);

// console.log(filterUsers(users));

// Closures y Alcance: Crea una función que incremente un valor numérico cada vez que sea invocada,
// pero que no permita que el contador sea modificado desde fuera de la función.

// const increment = () => {
//   let count = 0;
//   return () => count++;
// };

// const execIncrement = increment();
// console.log(`Counter: ${execIncrement()}`);
// console.log(`Counter: ${execIncrement()}`);
// console.log(`Counter: ${execIncrement()}`);
// console.log(`Counter: ${execIncrement()}`);
// console.log(`Counter: ${execIncrement()}`);

// Promesas y async/await: Implementa una función que realice tres tareas asincrónicas (por ejemplo, usar setTimeout para simular una llamada a API)
// en paralelo, y devuelva los resultados cuando todas hayan terminado. La función debe manejar errores correctamente.

// const generatePromise = (value) => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       if (value) {
//         res("good promise");
//       } else {
//         rej(new Error("bad promise"));
//       }
//     }, 1000);
//   });
// };

// const apiCall = async () => {
//   try {
//     const result = await generatePromise(true);
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }

//   try {
//     const result = await generatePromise(false);
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }

//   try {
//     const result = await generatePromise(true);
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// };

// apiCall();

// const generatePromise = (value) => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       if (value) {
//         res("good promise");
//       } else {
//         rej(new Error("bad promise"));
//       }
//     }, 1000);
//   });
// };

// const apiCall = async () => {
//   try {
//     const result = await Promise.all([
//       generatePromise(true).catch((error) => error),
//       generatePromise(false).catch((error) => error),
//       generatePromise(true).catch((error) => error),
//     ]);
//     console.log(result);
//   } catch (err) {
//     console.error(new Error(err));
//   }
// };

// apiCall();

// const apiCall = () => {
//   Promise.all([
//     generatePromise(true),
//     generatePromise(true),
//     generatePromise(true),
//   ])
//     .then((results) => {
//       console.log(results); // Solo se ejecuta si todas las promesas se resuelven
//     })
//     .catch((error) => {
//       console.error("One or more promises failed:", error); // Se ejecuta si alguna promesa falla
//     });
// };

// apiCall();

// const apiCall = async () => {
//   const wrapPromise = async (promise) => {
//     try {
//       return await promise;
//     } catch (error) {
//       return error; // Retornar el error en lugar de romper la ejecución
//     }
//   };

//   const results = await Promise.all([
//     wrapPromise(generatePromise(true)),
//     wrapPromise(generatePromise(false)),
//     wrapPromise(generatePromise(true)),
//   ]);

//   console.log(results); // Se imprimirá ["good promise", Error: bad promise, "good promise"]
// };

// apiCall();

// Dada una función que recibe un objeto anidado con información de un usuario (nombre, dirección, correo, etc.),
// crea una nueva función que extraiga solo el nombre y el correo, y retorne un nuevo objeto con estos datos.

// const user = {
//   name: "Ivan",
//   address: "Calle 777",
//   email: "test@test.com",
//   age: 40,
// };

// const tranformDataUser = ({ name, email }) => {
//   return () => {
//     return {
//       name,
//       email,
//     };
//   };
// };

// const newFunction = tranformDataUser(user);
// console.log(newFunction());

// Recursividad: Escribe una función recursiva que, dada una cadena de texto,
//invierta el contenido de la cadena sin utilizar métodos nativos como reverse() o bucles tradicionales.

// const response = [];
// function reverseString(value) {
//   if (value.length === 0) {
//     return response.join("");
//   }

//   response.push(value.charAt(value.length - 1));
//   const newEntry = value.split("");
//   newEntry.pop();
//   return reverseString(newEntry.join(""));
// }

// console.log(reverseString("ivan dario"));

// mas eficiente

// function reverseString(value, result = "") {
//   // Caso base: si la cadena está vacía, retorna el resultado acumulado
//   if (value.length === 0) {
//     return result;
//   }

//   // Caso recursivo: añadir el último carácter al resultado y llamar a la función con el resto de la cadena
//   return reverseString(
//     value.slice(0, -1),
//     result + value.charAt(value.length - 1)
//   );
// }

// console.log(reverseString("ivan dario")); // Output: "oirad navi"
