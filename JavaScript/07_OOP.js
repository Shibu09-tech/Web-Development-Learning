class Vechicle{
    constructor(make,model){
        this.make=make
        this.model=model
    }


start(){
    return `${this.model} is a car from ${this.make}`
}
}

// Inheritance example
class Car extends Vechicle{
    drive(){
        return `${this.make} this is an inheritance example.`
}
    
}

let myCar=new Car("Toyota","camry");
// console.log(myCar.drive());

//Encapsulation

class BankAccount{
    #balance=0 // this is not accesible my anyone

    deposit(amount){
        this.#balance+=amount;
        return this.#balance;
    }

    getBalance(){
        return `${this.#balance}`;
    }
}

let account=new BankAccount();
console.log(account.getBalance());
