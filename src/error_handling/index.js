(function () {
  const foo = [1, 2, 3, 4, 5];

  foo.forEach((element) => {
    try {
      if (element !== 3) {
        console.log("ok");
      } else {
        throw new Error("Error value");
      }
    } catch (err) {
      console.error(err);
    }
  });
})()(function () {
  try {
    console.log(foo);
    let foo = "test";
  } catch (err) {
    console.error("Error type ->", err);
  }
  console.log("continuous execution");
})();

(function (statusCode) {
  let message;
  switch (statusCode) {
    case 404:
      message = "not found";
      break;
    case 503:
      message = "internal server error";
    default:
      break;
  }

  try {
    if (!!message) {
      throw new Error(message);
    }
  } catch (err) {
    console.error(err);
  }
  console.log("Is error:", message !== undefined);
})(503);
