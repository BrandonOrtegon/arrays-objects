/*
    ? Class
    * a template for creating objects
    * it's what we think of as a contructor factory
    * it allows us to use the template to build instances of your Class
    
    ? Class Methods
    * allow us to modeify the instances of objects they create
*/

class Car {
    constructor(make, model, year, transmission, vin){
        // allows us to define our instances will hold
        this.make = make
        this.model = model
        this.year = year
        this.transmission = transmission
        this.vin = vin
        this.market = "North America"

    }

    modifyVIN(vin) {
        if(vin.length === 17){
            this.vin =vin;
        }else{
            console.log("VIN must be 17 characters long");
        }
    }
}

// creating an instance of our class
console.log(new Car());
let bmw = new Car("BMW", "M2", "POTATO", "MANUAL", 156754159);
console.log(bmw);

bmw.modifyVIN("A5D8FRF4865265W8D");

let audi = new Car("Audi", "RS5", 2026, "8AT", "25483218965487589");
console.log(audi);

/* 
    ? Inheritance
    * allows us to share original constructor and methods
    * without affecting the parent class construct
    * we use 'extends' keyword to inherit
*/

class CarEurope extends Car {
    constructor(make, model, year, transmission, vin, isCPO){
        // allows access to original constructor without having to do this.make, this.model, this.year, this.transmission, this.vin
        super(make, model, year, transmission, vin, isCPO);
        this.isCPO = isCPO
        this.market = "Europe";

    }
}

console.log(new CarEurope());

let alpine = new CarEurope("Alpine", "A110", 2025, "manual", "5874593251875482");

alpine.modifyVIN("D6F98C1E56E8F65F6");

/*
    ? APIE
    * abstraction - Means hide the complicated steps. Show only a simple button or name
        * hiding the complex steps inside a function, we only see a simple name and inputs
        * obfuscation of implementation (wrapping inside of a function)
        * ex: you press "30 seconds"
        * you do not see:
            * how the electricity moves
            * how the motor spins
            * how the heat is made
    * polymorphism
        * different objects from the same kind or constructor
        * creating instances from the same constructor aka the bmw and audi are polymorphic because they're different but they have the same property
        * they share properties and methods but can act differently
    * inheritance
        * shares methods and properties
        * one thing gets properties and methods from another "parent"
        * ex: Dog inherits from Animal and gets its behavior
    * encapsulation aka keeps inside or holds - we're giving it its own scope, keep related data and functions together in one place
        * keeping related data and functions together in one "box"
        * gives them their own space (scope)
        * other code can't easily mess with the inside
        * scope related shenanigans {{{{{{{{}}}}}}}}
*/
