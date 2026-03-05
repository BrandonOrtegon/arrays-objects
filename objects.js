/*
    ? Objects
    * structured container for data
    * in a JavaScript Object Notation (JSON)
        *a way to keep structured data, parse it, and send it efficiently
    * JSON is actually a string that gets parsed and built up
    * no index ability but it does give us structure
    * the structure comes in the form of .properties
    * it also has .methods() -- some built in, some we can create
    * utilizes .this keyword
*/

// ? How to create an object

let sampleObject = {}
console.log(sampleObject);

let student = {
    // property: value,
    // key: value pair
    name: "Scott",
    age: 30,
    cohort: "fullstack-10",
    grades: [90, 25, 30, 17, 100],
    isEnrolled: true
}
console.log(student);

// ? Let's talk real JSON real quick

// ? turn an object into a JSON string

let jsonString = JSON.stringify(student); // efficient for web transport
console.log(typeof jsonString, jsonString);

// ? how to turn JSON string into an object to parse

let sampleJSONString = '{ "name": "Paul", "age": 30}';

let jsonObject = JSON.parse(sampleJSONString);
console.log(jsonObject);

// ? HINT: JSON parse is VERY sensitive to proper syntax

// TODO: proviode students with syntax for JSON

// ? Access any property or value

console.log(student.cohort); // returns the value of cohort property

console.log(student["name"]); // NOT an array, but syntax is the same

// console.log(student[2]); // undefined -- NOT indexable & NOT an array

// ? How to modify properties and values

student.isEnrolled = false;
console.log(student);

// ? How to add property and a value? 

student.mainLanguage = "JavaScript";
console.log(student);

// ? Simnple built-in methods on Objects

// Object - interface creating object instances; .keys - method on that object
let studentProperties = Object.keys(student); // get all object keys in an array format
console.log(studentProperties);

let studentValues = Object.values(student);
console.log(studentValues);

/*
    ? JS Fundamentals Crash Course
    * JS is a prototype-based object oriented language
    * meaning every data type (string, array, null, etc.) is an object
    * so how do they get created?? Using a constructor
    * constructor will create a new object using new keyword
    * this new object is a direct descendant of that constructor (factory)
*/

let newStr = new String("This is my string off String constructor");
console.log(newStr);
let newArray = new Array(5);
console.log(newArray);

// examples of methods used on instances of constructor created objects
console.log(newStr.toLocaleLowerCase());
console.log(newArray.filter(i => i));

/*
    ? Challenge
    * access Scott's grades and return a GPA into a variable
    * do it using array methods
    * GPA sum/number of grades
    
    ! HARD MODE - add the result to the property called GPA
*/
console.log("----------------------");
let scottsGrades = student.grades;
let sum = 0;
// for(let i = 0; i < scottsGrades.length; i++){
//     sum = sum + scottsGrades[i];
// }
// let gpa = sum / scottsGrades.length;
// console.log(gpa);


// Using Reduce
student.gpa = student.grades.reduce((sum, num) => sum + num, 0) / student.grades.length;

// Using forEach
scottsGrades.forEach((val) => {
    sum = sum + val;
});
let gpa = sum / scottsGrades.length;
student.gpa = gpa;
console.log(student.gpa);

/*
    ? Learn Objects by authentication service
*/

let payload = {
    email: "paul@codecademy.com",
    password: "dbLocal"
}

// created a variable with an object with a database array full of objects
let db = [
    { email: "paull@codecademy.com", password: "dbLocal" },
    { email: "scott@gmail.com", password: "Scotti3" },
    { email: "arush@google.com", password: "password" },
    { email: "ruse@cyberexpert.com", password: "lakdh&)ldkx-dakhjlf" }
]

// accessing scots password
console.log(db[1].password); // db stores an array, index 1 since arrays are indexable, and do .password to access scotts password
console.log("----------------------");
console.log("----------------------");

// Function is used to hold reusable code
let authenticate = (database, request) => {
    // loop over the database
    // check if payload email matches any email from the database (db)
    // handle the case if email doesn't exist
    // check if payload password matches the password from the database (db)
    // handle the case if passwords do not match
    
    // let foundUser = [];
    // database.forEach(usr => {
    //     if(usr.email === request.email){
    //         foundUser.push(usr);
    //     }
    // })

    let foundUser = database.filter (usr => usr.email === request.email); // same as starting code on line 151 but all in one line
    
    if(foundUser.length){
        // nested if statement conditional checks the password
        if(foundUser[0].password === request.password){
            console.log("Logged In");
        }else {
            console.log("Invalid Password");
        }
    }else {
        console.log("No user, go away");
    }
}

authenticate(db, payload);

console.log("==================");
// ? Take Home Challenge
/*
    * print the second song name from album1
    * add album3 inside albumInfo
    * album3 should contain: 
        * numberOfSongs
        * songInfo (array of 2 song objects with track and songName properties)
        * fabricate their values to whatever you wish
    
    ! HARD MODE: add a property called totalAblums which should be total number of albums.
    * hint: use Object.keys() and something else
*/

let album = {
    id: 55,
    artist: "the Midnight",
    likes: 4200,
    albumInfo: {
        album1: {
            numberOfSongs: 3,
            songInfo: [
                {track: 1, songName: "Days of Thunder"},
                {track: 2, songName: "Los Angeles"},
                {track: 3, songName: "Sunset"}
            ]
        },
        album2: {
            numberOfSongs: 2,
            songInfo: [
                {track: 1, songName: "Neon Lights"},
                {track: 2, songName: "city Dreams"}
            ]
        }
    },
    isAvailable: true
}

// print the second song name from album1
console.log(album.albumInfo.album1.songInfo[1].songName);

// add album3 inside albumInfo
// album3 should contain: 
// numberOfSongs
// songInfo (array of 2 song objects with track and songName properties)
// fabricate their values to whatever you wish
album.albumInfo.album3 = {
    numberOfSongs: 2,
    songInfo: [
        {track: 1, songName: "Telephone Busy"},
        {track: 2, songName: "PARANOIA"}
    ]
}
console.log(album.albumInfo.album3);

// HARD MODE: add a property called totalAblums which should be total number of albums.
album.totalAlbums = Object.keys(album.albumInfo).length;

console.log(album.totalAlbums);

// I don't know what Object.keys() is.... 
console.log(album);

