// Manipulación de Arrays: Escribe una función que reciba un array de objetos que representen personas (con propiedades como nombre, edad y ciudad) y devuelva un nuevo array filtrado solo con personas mayores de 30 años y cuyos nombres tengan más de 5 letras.

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

// Closures y Alcance: Crea una función que incremente un valor numérico cada vez que sea invocada, pero que no permita que el contador sea modificado desde fuera de la función.

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

// Promesas y async/await: Implementa una función que realice tres tareas asincrónicas (por ejemplo, usar setTimeout para simular una llamada a API) en paralelo, y devuelva los resultados cuando todas hayan terminado. La función debe manejar errores correctamente.

// const generatePromise = (value) => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       if (value) {
//         res("good promise");
//       }
//       rej(new Error("bad promise"));
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

const generatePromise = (value) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (value) {
        res("good promise");
      } else {
        rej(new Error("bad promise"));
      }
    }, 1000);
  });
};

const apiCall = () => {
  Promise.all([
    generatePromise(true),
    generatePromise(true),
    generatePromise(true),
  ])
    .then((results) => {
      console.log(results); // Solo se ejecuta si todas las promesas se resuelven
    })
    .catch((error) => {
      console.error("One or more promises failed:", error); // Se ejecuta si alguna promesa falla
    });
};

apiCall();
