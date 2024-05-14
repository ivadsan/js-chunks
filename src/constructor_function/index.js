function Car(price, model){
    this.price = price
    this.model = model
}

const car1 = new Car(1000, 1999)
const car2 = new Car(2000, 1995)


console.log('car1', car1)
console.log('car2', car2)




//Constructor
function User() {
    this.name = 'Bob';
}

let user1 = new User();
let user2 = new User();

//Adding property to constructor using prototype
User.prototype.age = 25;

console.log(user1); // 25
console.log(user2); // 25