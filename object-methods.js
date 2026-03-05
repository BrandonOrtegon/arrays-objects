/*
    ? Objects Methods
    * different from array methods
    * because we're the ones who will build majority of them
    * they require 'this' to access data, or else, they grab global scope
    * 'this' is a magical keyword which defines scope
        * means - here, right now
    * we can build our own methods that deal and handle the object
*/

let f1team = {
    name: "Petronas",
    principal: "Toto Wolff",
    location: "England",
    drivers: ["Kimi Antonelli", "George Russell"],

    listDrivers () {
        return this.drivers;
    },

    definitionOfThis(){
        return this;
    },

    // remember when I said this does not bind on arrow fx expressions?

    thisArrowFX: () => {
        return this;
        // ! DO NOT USE: this is not bound to the object
    },

    addDrivers: function(driver) {
        this.drivers.push(driver);
    }
}

console.log(f1team.listDrivers());
console.log(f1team.definitionOfThis());
console.log(f1team.thisArrowFX());
console.log(f1team.addDrivers("Frederik Vesti"));
console.log(f1team);
// encapsulate? meaning...

console.log("===================");

/*
    ? Challenge
    * let's build a todo object with today, tomorrow, and urgent properties
    * properties should ahve empty arrays
    * now build the following methods
        * addToday - to add an item to today key
        * addTomorrow - to add an item to tomorrow key
        * clearAll - which clears all arrays
    ! HARD MODE - removeFrom - which will remove an item from selected property
*/

let toDo = {
    today: [],
    tomorrow: [],
    urgent: [],

    // Methods
    addToday (item) {
        this.today.push(item);
        return `You have ${item} to do today`;
    },

    addTomorrow (item) {
        this.tomorrow.push(item);
        return `You have ${item} to do tomorrow`;
    },

    clearAll () {
        this.today = [];
        this.tomorrow = [];
        this.urgent = [];
    },

    removeFrom(list, item){
        this[list].filter(i => i != item);
    }
}

// console.log(toDo.addToday("Cleaning"));
// console.log(toDo.addToday("Sweeping"));
toDo.addToday("Cleaning");
toDo.addToday("Sweeping");
console.log(toDo.today);

// console.log(toDo.addTomorrow("Studying"));
// console.log(toDo.addTomorrow("Running"));
// toDo.addTomorrow("Studying");
// toDo.addTomorrow("Running");
// console.log(toDo.tomorrow);

toDo.clearAll();
console.log(toDo);