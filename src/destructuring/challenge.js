/* Challenge: Manipulación de Objetos en JavaScript

Objetivo: Demostrar habilidades en la manipulación de objetos y el uso de destructuring en JavaScript para realizar una transformación específica de datos de manera inmutable.

Descripción
Dado el siguiente objeto:

*/
const foo = {
  a: "b",
  c: "d",
  e: "f",
  g: "h",
  i: "j",
  k: "l",
};

/*
Crea un nuevo objeto basado en foo, pero sin la propiedad k.

En el nuevo objeto, añade una propiedad llamada otroK que contenga el valor original de la propiedad k de foo.

Asegúrate de que foo permanezca sin cambios (inmutable).

El resultado final debe verse así:

{
    a: "b",
    c: "d",
    e: "f",
    g: "h",
    i: "j",
    otroK: "l"
}
*/
/*
Condiciones:

- No uses métodos de modificación directa del objeto (como delete).

Entregable:

Una función en JavaScript que realice esta transformación y devuelva el nuevo objeto con la estructura solicitada.
Evaluación
Este ejercicio evaluará la comprensión de conceptos avanzados de JavaScript, como desestructuración, inmutabilidad y manipulación de objetos.

*/
