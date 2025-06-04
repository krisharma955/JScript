// Arrays in JS (Part I)
//? It can be homo/hetero in case of data types for storing values
//? Array copy operations in JS => creates shallow copy
//* Shallow Copy => A shallow copy of an object is a copy whose properties share the same references. When we change either the source or the copy, we may also cause the other object to change too
//* Deep Copy => A deep copy of an object is a copy whose properties do not share the same references. When we change either the source or the copy, we can be assured we're not causing the other object to change too

//! Declaring Arrays
const arr = [0,1,2,3,4,5]
console.log(arr)
const heros = ["ironman", "thor", "spiderman"]
const arr2 = new Array(1,2,3,4) //* using object
//? elements of arrays can accessed using indexes

//! Methods
arr.push(6) //* adds elements to the end of the array
console.log(arr)

arr.pop() //* removes the last element of the array and returns it
console.log(arr);

arr.unshift(9) //* adds the element to the start of array (not preferred)
console.log(arr);

arr.shift() //* removes element from the start
console.log(arr);

console.log(arr.includes(4)); //* returns in boolean (true/false)

console.log(arr.indexOf(3)) //* returns index of the given value and returns -1 if the element is not present in the array

const newArr = arr.join() //* binds and converts the array into string
console.log(newArr) //* 0,1,2,3,4,5
console.log(typeof newArr) //*string

//? Slice() & Splice()
console.log("A", arr); //* original array (Pt.A) => 
//* A [ 0, 1, 2, 3, 4, 5 ]

const n1 = arr.slice(1,3) //* returns a part of array => (start, end) => start is included but end is not 
console.log(n1); //* [1,2]
console.log("B", arr); //* Original Array after slicing (Pt.B) =>
//* B [ 0, 1, 2, 3, 4, 5 ]

const n2 = arr.splice(1,3) //* removes a part of the array from the original array 
console.log(n2); //* [1,2,3]
console.log("C", arr); //* Original Array after splicing (Pt.C) =>
//* C [ 0, 4, 5 ]
//? IMP => difference btw slice and splice is that slice does not modify the original array but splice modifies and removes a part from the original array

// Arrays in JS (Part II)
const marvel_heros = ["thor", "ironman", "drStrange"]
const dc_heros = ["superman", "batman", "flash"]

//! Merging two arrays
//? using push()
marvel_heros.push(dc_heros)
console.log(marvel_heros); //* [ 'thor', 'ironman', 'drStrange', [ 'superman', 'batman', 'flash' ] ] => it's not proper and not preferred method

//? using concat()
//? The concat() method does not modify the original array — it returns a new array combining the elements.
const all_heros = marvel_heros.concat(dc_heros) //? Preferred method
console.log(all_heros); 

//? using spread operator
const marvelXdc = [...marvel_heros, ...dc_heros] //? most used
console.log(marvelXdc); //*[ 'thor', 'ironman', 'drStrange', 'superman', 'batman', 'flash' ]

const arr3 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const newArr3 = arr3.flat(Infinity) //* spreads all the elements of the array
console.log(newArr3);

//! to convert the recevied data to arrays 
console.log(Array.isArray("charles")) //* checks for an array (returns in boolean)
console.log(Array.from("charles")); //* converts anything to arrays
console.log(Array.from({name: "lando"})); //* specify which needs to be converted to array key or value, otherwise it will return a empty array

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); //? of -> Returns a new array from a set of elements => [ 100, 200, 300 ]

// Objects in JS
//? Two methods to declare objects -> i) like literal, ii) like constructor
//? when defined using literals -> singleton is not formed, but when defined using constructors -> singleton is formed

//! Object literals
//? Declaration
const mySym = Symbol("key") //* declaring a symbol
const user = { 
    name: "vettel",
    "full name": "Sebestian Vettel",
    [mySym]: "mykey",
    wdc: 4,
    location: "Germany",
    team: "Redbull",
    retired: true,
    raceWeekends: ["Saturday", "Sunday"]
} //? JS automatically takes keys as strings

//? Accessing Elements
console.log(user.team); //* Redbull
console.log(user["team"]); //* Redbull [preferred]
console.log(user["full name"]) //* this can't be accessed using . method
console.log(user[mySym]); //? Q. declaring a symbol, adding to keys of thje objecxt and using it as a key

//? Changing values 
user.team = "AstonMartin"
console.log(user);

//? Freezing the Object => to avoid any changes
////Object.freeze(user)
////user.wdc = 5 
console.log(user); //* still wdc = 4 (no changes)

user.greeting = function() {
    console.log("HOLA");
}
user.greeting2 = function() {
    console.log(`Hola, Vettel ${this["full name"]}`);
}

console.log(user.greeting); //* [Function (anonymous)] => function is not executed, we just got a reference
console.log(user.greeting());
console.log(user.greeting2());
