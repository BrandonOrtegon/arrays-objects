/*
    ? Array methods
    * what on Earth is a method?!
    * it's a function... exits on a specific object protoype
    * TLDR function specific to your object type (in this case, array)
*/

let arrayFromConstructorObject = new Array;
console.log(arrayFromConstructorObject);

/*
    ? Basic array methods
    * .push() --> adds & returns said item
    * .pop() --> removes last item & returns said item
    * .unshift() --> adds to front & returns length
    * .shift() --> removes from front & returns said item
*/

let carBrands = ["BMW", "Porsche", "Mercedes", "Audi", "Pangani", "Lamborghini"];
console.log(carBrands);
let returnOfPush = carBrands.push("Mazda"); // variable holding the value aka the return so it holds 7 since we addeed "Mazda" to the array
console.log(carBrands, returnOfPush);

console.log("===============");
let returnOfPop = carBrands.pop(); // variable holding the value that was removed from the end of the array
console.log(carBrands, returnOfPop);

let returnOfUnshift = carBrands.unshift("Honda", "Saab"); // variable holding the value aka the return so it holds 7 since we addeed "Honda" to the array
console.log(carBrands, returnOfUnshift); 


let returnOfShift = carBrands.shift(); // variable holding the value that was removed from the begining of the array
console.log(carBrands, returnOfShift);

// findIndex action

carBrands.findIndex((value, index) => {
    if (value === "Porsche"){
        console.log(index);
    }
});

/*
    ? Advanced Array Methods
    * forEach()
        * loops through an array
        * runs a callback on all items in an array
    * map()
        * same as forEach but returns
    * filter()
        * builds new array using a test (yes/no rule)
        * the test must return true or false
        * can only take an if expression!! (no else)
        
    * advanced array methods; most common parameters
        * value - at any given time during the iteration
        * index - the index of the array
        * array - access to the original array
*/

let planets = ["Earth", "Venus", "Mars", "Jupiter", "Uranus", "Mercury", "Neptune", "Pluto", "Saturn"];

/*
    ? What is a callback?
    * it's a function passed inside of another function
    * it runs whenever preceeding function's predicate is satiesfied
*/

function myCallbackFx(v, i, a){

}

planets.forEach(myCallbackFx);

// Above is the same as below
// forEach will never return anything
let upperrCasedPlanets1 = planets.forEach((value, index, origArr) => {
    console.log(value.toUpperCase());
})

// Useful as a single-liner loop to perform work on your data set


let upperCasedPlanets2 = planets.map((value) => value.toUpperCase());
console.log(upperCasedPlanets2);

let longerWordedPlanets = planets.filter((val) => val.length > 5);
console.log(longerWordedPlanets);


