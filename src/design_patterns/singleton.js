class Session {
  constructor() {
    if (Session.instance) {
      return Session.instance;
    }
    console.log(Session.instance);
    this.data = "Unique instance";

    Session.instance = this;
  }

  setData(value) {
    this.data = value;
  }

  getData() {
    return this.data;
  }
}

const foo1 = new Session();
const foo2 = new Session();
const foo3 = new Session();

console.log(foo1 === foo2);
console.log(foo1.getData());

foo2.setData("new info");
console.log(foo1.getData());
