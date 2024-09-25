const mediator = (() => {
  const events = {};

  const suscribe = (event, fn) => {
    if (!events[event]) {
      events[event] = [];
    }
    events[event].push = fn;
  };
})();

// mediator.suscribe("greetings", () => console.log("hello world"));
console.log(mediator);
