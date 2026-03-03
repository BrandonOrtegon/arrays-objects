/*
    ? Challenge
    ! Da Rules
    Use only .map() and .filter()
    No for loops
    Do not modify the original array
    Use arrow functions
*/

const numbers = [4, 7, 10, 13, 18, 21, 24, 29];

// create a new array to filter only even numbers
let evenNumbers = numbers.filter((num) => {
    return num % 2 === 0;
});
console.log(evenNumbers);

// create a new array and multiple every number by 2
let numbersDoubled = numbers.map((val) => {
    return val * 2;
});
console.log(numbersDoubled);

// create a new array that sqaures only the odd numbers
let oddNumbers = numbers.filter((num) => {
    return num % 2 === 1;
});

let squaredNumbers = oddNumbers.map((val) => {
    return val * val;
})
console.log(squaredNumbers);

// create a new array that only include numbers greater than 15 and subtract 5 from each of the remaining number, must use chaining
let largeNumbers = numbers.filter((val) => {
    return val > 15;
}).map((num) => {
    return num - 5;
});
console.log(largeNumbers);