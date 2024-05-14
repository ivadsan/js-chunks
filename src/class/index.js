class Car{
    constructor({type, model, color}){
        this.type = type
        this.model = model
        this.color = color
        this.isOn = false
    }

    startEnginee(){
        this.isOn = true
    }

    stopEnginee(){
        this.isOn = false
    }
}

const car1 = new Car({type: "pickup", model: 2022, color: "gray"})
car1.startEnginee()

console.log(car1)

car1.stopEnginee()

console.log(car1)

car1.newattr = 'test'

console.log(car1)
