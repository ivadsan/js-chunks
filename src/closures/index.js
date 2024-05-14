const foo = () => {
  let i = 0;

  return () => {
    i++;
    console.log(i);
  };
};

const incr = foo();

// generando eventos con un closure
const xyz = () => {
  let i = 0;

  return () => {
    i++;
    if (i === 3) {
      alert("test");
    } else {
      console.log(i);
    }
  };
};

const incrVar = xyz();
