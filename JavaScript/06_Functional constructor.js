function Car(make,model){
    this.make=make
    this.model= model
}

let myCar=new Car("Toyota","Camry");
let myNewCar=new Car("Toyota","Camry");
// console.log(myCar);
// console.log(myNewCar);

//...................................................

function tea(Type){
    this.Type=Type
    this.describe = function (){
        return `this is a cup of ${this.Type} `;
    };
};
let lemonTea=new tea("lemon tea");
// console.log(lemonTea.describe());

//...................................................

function Animal(Species){
    this.Species=Species
}

Animal.prototype.sound=function(){
    return `${this.Species} makes a sound`
}

let dog =new Animal("Dog");
// console.log(dog.sound());

//...................................................
// Functions Error check

function Drink(name){
    if(!new.target){
        throw new Error("Drinks must be called with new keyword");
    }
    this.name=name;
}
let tea1= new Drink("tea");
let coffee= Drink("coffee");
