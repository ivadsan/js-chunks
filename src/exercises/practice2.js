// Escribe una función recursiva que determine la profundidad de un objeto anidado. Por ejemplo, dado el siguiente objeto:

// javascript
// Copiar código
const obj = { a: 1, b: { c: { d: 4 }, h: {} }, e: 5, f: { g: 6 } };
// La función debería devolver 3 ya que el objeto tiene tres niveles de profundidad.

// Puntos a considerar:
// El objeto puede tener propiedades anidadas con más objetos.
// Usa recursividad para contar los niveles de anidación.

function deepLevelCounter(input, counter = 0) {
  if (
    typeof input !== "object" ||
    input === null ||
    Object.keys(input).length === 0
  ) {
    return counter;
  }

  const result = {};
  Object.keys(input)
    .filter(
      (key) =>
        typeof input[key] === "object" && Object.keys(input[key]).length > 0
    )
    .forEach((key) => {
      const deepLevel = Object.keys(input[key]);
      deepLevel.forEach((key2) => {
        result[key2] = input[key][key2];
      });
    });
  return deepLevelCounter(result, counter + 1);
}

console.log("el nivel de profundidad es " + deepLevelCounter(obj));
