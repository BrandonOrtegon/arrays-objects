/*
    ? Arrays
    * collection of multiple items
    * like a list, or a collection
    * we use [ ] to define it
    * data type agnostic
    * indexable aka starts at index 0
*/

let myFirstArray = []; // creates an empty array

console.log(myFirstArray);
console.log(myFirstArray.length); // checks the lenth of your array

let visitedCountries = ["England", "France", "Germany", "Poland", "Canada"];
console.log(visitedCountries);

// Array can be accessed using index, just like strings

console.log(visitedCountries[2]); // access Germany in the array, indexes start at 0

// What would happen if I accessed something out of bounds?
// console.log(visitedCountries[9]); // will get undefined because its not listed

// ? How do we add more data into an array?

visitedCountries[visitedCountries.length] = "Switzerland"; //visitedCountries.length will always be the last number and you can set it to the value you're wanting
console.log(visitedCountries);

// ? How do we reassign value?

visitedCountries[1] = "Mexico";
console.log(visitedCountries);

/*
    ? Challenge
    * create a function
    * it wil take two parameter, array and search
    * iterates thru the array
    * check if the item from the search param is found in the array
    * return true if found or false if not
*/

function findValue(array, search){
    for(let i = 0; i < array.length; i++){
        if(array[i] === search){
            return true;
        }
    }
    return false;

    // instructors solution
    // let result = false;
    // for (i of array){
    //     console.log(i);
    //     if(i === search) {
    //         result = true;
    //         break; // stops execution once satisfied
    //     }
    // }
    // return result;
}

console.log("----------------");
console.log(`Have you been to Poland? ${findValue(visitedCountries, "Poland")}`);

// ? Arrays with many different data types

let junkDrawerArray = [
    "whats up",
    67,
    ["dog", "cat", "giraffe"],
    null,
    false,
    "potato"
]
console.log("----------------");
console.log(junkDrawerArray);

// ? How to get the cat out of the bag... erm... aray

console.log(junkDrawerArray[2][1]); // [2] access the index of the array and [1] accesses the inner array value of cat

/*
    ? Challenge
    * create a function called findIndex
    * it will take an array and search param
    * iterate over an array
    * if found, return the index where found item is
    * 
    ! HARD MODE - return the index AND the item
*/

function findItem (array, search){
    for(let i = 0; i < array.length; i++){
        if(array[i] === search){
            return `The index is: ${i} and the value is: ${array[i]}`;
        }
    }
    return "Couldn't find your item";

    // instructor solution:
    // let result = [];
    // for(i in array){
    //     if(array[i] === search){
    //         result[0] = i;
    //         result[1] = array[i];
    //         return result
    //     }
    // }
    // return result;
}

console.log(findItem(visitedCountries, "Poland"));