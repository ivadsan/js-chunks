// Que retorna el siguiente código

const foo = "i am a developer";
const res = foo
  .split(" ")
  .map((s) => s[0].toUpperCase())
  .join(" ");

// output: 'I A A D'
