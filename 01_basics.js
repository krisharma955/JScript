// JS is a dynamically typed language

// Variable Declaration
const name = "krish" //* to declare a constant value (it's value can't be changed)
let age = 20 //* most commonly used
var surName = "Sharma" //? not used now bcz of issue in block & functional scope
console.table([name, age, surName]); //* prints the variables in a table form

// Data Types 
//? Primtive => (Call by value) => (A copy is shared) => string, number, boolean, null, undefined, symbol, BigInt
//? Non-Primitive (Reference type) => (Call by reference) => arrays, objects, functions (Type of every non-primitive data type is Object)

//! Declaring BigInt & Symbol
//! BigInt
const bigNumber = 12234n
console.log(typeof bigNumber); //* bigint

//! Symbol
const id1 = Symbol("123")
const id2 = Symbol("123")
console.log(typeof id1); //* symbol
console.log(id1 == id2); //* False => bcz both have different references in the memory

//? null => is a standalone value (it's a datatype aswell)
console.log(typeof null) //* object

//? undefined => the value is not defined 
let x;
console.log(typeof x); //* undefined (currently)

//? Boolean => true = 1 & false = 0

//! Declaring Arrays
let heros = ["ironman", "thor", "spiderman"]
console.log(typeof heros); //* object

//! Declaring Objects (key-value pairs)
let Obj = {
    name: "lewis",
    wdc: 7,
}
console.log(typeof Obj); //* object

//! Declaring Function
const myFunc = function() {
    console.log("Hello World");
}
console.log(typeof myFunc); //* function (it's actually function object)

// Memory
//? Stack => used when primitive data types are used => we get a copy of value (bcz primitive data types are call by value)
//? Heap => used when non-primitive data types are used => we get a reference of the original value (bcz non-primitve data types are call by reference)

//! Stack 
let name1 = "lando"
let name2 = name1
name2 = "charles"
console.log(name1); //* lando
console.log(name2); //* charles
//* the value of name1 does not change when we changed name2 because a copy of name1 was send to name2 and the change was made in the copy and not the original variable

//! Heap
let user1 = {
    email: "abc@google.com",
    upi: "xyz@ybl",
}
let user2 = user1 //* here we get the reference of the original not the copy
user2.email = "pqr@google.com"
console.log(user1.email); //* pqr@google.com
console.log(user2.email); //* pqr@google.com

// Strings
const firstName = "krish"
const secondName = "Sharma"
console.log(firstName+ " " +secondName);
console.log(`Hello, My firstName is ${firstName} and secondName is ${secondName}`); //? this method is preferred & is k/a String Interpolation

//! Declaring using objects
const gameName = new String("Blaze")
console.log(gameName); //? internally their are key-value pairs (in console)
/*
0: "B"
1: "l"
2: "a"
3: "z"
4: "e"
*/
console.log(gameName.__proto__); //* gets all the string functions in browser console

//! String Methods
//? length
console.log(gameName.length); //* 5

//? toUpperCase() & toLowerCase()
console.log(gameName.toUpperCase()); //* BLAZE
console.log(gameName.toLowerCase()); //* blaze

//? charAt() & indexOf()
console.log(gameName.charAt(3)); //* z
console.log(gameName.indexOf("a")); //* 2

//? substring() & slice()
console.log(gameName.substring(1,4)); //* laz => (start, end) => start is included but end is not included (no -ve values), -ve value is treated as 0
console.log(gameName.slice(-6,4)); //* Blaz => negatives are allowed

//? trim() & split()
const Str = "    String     "
console.log(Str.trim()); //* removes all the white spaces

const Str2 = "java-script-web-dev"
console.log(Str2.split("-")); //* converted to an array on the basis of "-" => [ 'java', 'script', 'web', 'dev' ]

//? replace() & includes()
const url = "https://abcd.com/xyz%20pqr"
console.log(url.replace("%20", "-")); //* https://abcd.com/xyz-pqr => replaces the values => (to be replaced, with whom it should be replaced)

console.log(url.includes("abc")); //* true => gives boolean result on the basis if the given value is present or not

// Number in JS
const score = 300 //* JS automatically defines it as a number
console.log(typeof score)

const balance = new Number(300) //* explicitly defining a number
console.log(typeof balance) //* Number Object

//! Properties
console.log(typeof balance.toString()); //* converts it to a String
console.log(balance.toFixed(2)); //* 300.00 => rounds off to given digits

const newNumber = 24.987
console.log(newNumber.toPrecision(2)); //* (Returns a String) => gives precise value according to the given the number (1-21)

const val = 1000000
console.log(val.toLocaleString()); //* US standard comma speration used
console.log(val.toLocaleString('en-IN')); //* Indian standard

// Math in JS
console.log(Math.abs(-3)); //* works as modulus (-ve to +ve)
console.log(Math.round(4.6)); //* helps in rounding off
console.log(Math.ceil(4.2)); //* upper value related to value
console.log(Math.floor(4.2)); //* lower value realted to value
console.log(Math.max(1,2,3,4,5)); //* Max value
console.log(Math.min(1,2,3,4,5)); //* Min value

//! Math.random()
console.log(Math.random()); //* gives random values btw 0 & 1
console.log(Math.floor(Math.random()*10) + 1); //* the random value gets multplied by 10 & to avoid getting 0 (we did a +1) & for getting a natural number we did a math.floor

const min = 1
const max = 6
console.log(Math.floor(Math.random() * (max - min + 1)) + min); //? this formula gets us the numbers btw 1(min) to 6(max)

// Dates in JS
let myDate = new Date() //* created a date object
console.log(typeof myDate); //? object

//! Different types => Date can be represented
console.log(myDate); //* 2025-06-04T09:19:23.125Z (unreadable)
console.log(myDate.toString()); //* Wed Jun 04 2025 14:50:04 GMT+0530 (India Standard Time) {better}
console.log(myDate.toDateString()); //* Wed Jun 04 2025 
console.log(myDate.toLocaleDateString()); //* 4/6/2025
console.log(myDate.toLocaleString()); //* 4/6/2025, 2:51:53 pm

//! Declare a date
let myCreatedDate = new Date(2022, 0, 2, 5, 4, 34) //? format -> (Year, Month, Date, Hour, Minutes, Seconds) => Months in JS starts from 0
console.log(myCreatedDate.toLocaleString()); //* 2/1/2022, 5:04:34 am

let myCreatedDate2 = new Date("09-05-2005") //? DD-MM-YYYY
console.log(myCreatedDate2.toLocaleString()); //* 5/9/2005, 12:00:00 am

let myTimeStamp = Date.now() //? gives the current date (in ms) => useful in polls
console.log(myTimeStamp); //* time in ms (1749029513001)
console.log(myCreatedDate.getTime()); //* 1641080074000 {they are comparable}
console.log(Math.floor(Date.now()/1000)) //? to get value in seconds

//! Methods
let newDate = new Date()
console.log(newDate.getMonth() + 1); //? to get month (+1 to avoid confusion for user)
console.log(newDate.getDay() + 1); //? to get day
//? Many More....

console.log(newDate.toLocaleString('default', {
    weekday: "long",
    dateStyle: "full",
})) //? this method is quite useful of the customization it offers