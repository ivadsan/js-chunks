const foo = [2, 3, 4, 6];

const target = 6;

function findTarget(foo, target) {
  foo.forEach((x, indexX) => {
    foo.forEach((y, indexY) => {
      if (x + y === target) {
        console.log(`${x} + ${y} = ${target}`);
        console.log([indexX, indexY]);
      }
    });
  });
}

findTarget(foo, target);
