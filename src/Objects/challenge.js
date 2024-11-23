/*
Dado un array input y un array output, escribe una función que actualice el contenido de output según las siguientes reglas:

Si un objeto de input tiene una clave (key) que ya existe en output, actualiza el valor (value) correspondiente en output con el valor de input.
Si un objeto de input tiene una clave (key) que no existe en output, agrega ese objeto completo a output.
*/

const input = [
  { key: 8, value: "a" },
  { key: 10, value: "b" },
  { key: 11, value: "c" },
];

const output = [
  { key: 8, value: "update" },
  { key: 7, value: "update" },
  { key: 9, value: "update" },
];

input.forEach((el) => {
  const index = output.findIndex((elOutput) => elOutput.key === el.key);
  if (index !== -1) {
    output[index].value = el.value;
  } else {
    output.push(el);
  }
});

console.log(output);
