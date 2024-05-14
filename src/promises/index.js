const generatePromise = (value) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (value) {
        res("ok");
      } else {
        // new Error('Error: upps!')
        rej(new Error("Error: upps!"));
      }
    }, 1000);
  });
};

const execTryCatch = async (value) => {
  try {
    const response = await generatePromise(value);
    console.log(response);
  } catch (err) {
    console.error(err);
  }
};

execTryCatch(true);
execTryCatch(false);
