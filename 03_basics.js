// Functions in JS
//? Declaring a function
function sayMyName() {
    console.log("krish");
}
sayMyName //* reference of function
sayMyName() //* execution of function => calling a function

//! Function to add 2 Numbers
function add2Numbers(num1, num2) { //* Parameters are present on function header
    console.log(num1 + num2);
}
add2Numbers(1,2) //* arguments are given when the function is called

function add2Nos(num1, num2) { //* return statement used
    return num1+num2
}
const result = add2Nos(3,5)
console.log(result);

//! More Examples
function loginUserMsg(username = "sam") { //* we have given a default value, if no value is passed then sam will be used.
    if(!username){ //* a check for undefined, 
    //* (username ===/== undefined) can also be used
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMsg("tony stark")); //* tony stark just logged in
console.log(loginUserMsg()); //* undefined just logged in (this output is before giving default value) => the parameter (username) is not defined

function calculateCartPrice(...num) { //* using rest(...) operator
    return num
}
console.log(calculateCartPrice(10,20,30)) //* 10 => when rest(...) operator is not used => it takes only the first value
console.log(calculateCartPrice(10,20,30)); //* [ 10, 20, 30 ] => after using rest => multiple arguments can be enteredy  and a arrais returned => and hence we can manupilate the data in the array accordingly
//? Rest and Spread Operator both are (...).
//? Rest => used to collect multiple elements into a single array or object. {kind of GATHERING}
//? Spread => used to expand elements of an array or object {kind of spreading out}

function calculateCartPriceII(val1, val2, ...num) {
    return num
}
console.log(10,20,30,40,50); //* [30, 40, 50]
//? Q. what values will num take => val1 -> 10, val2 -> 20 and the rest will be taken by num

//! Usage & Passing of object in functions
const user = {
    username: "tony Stark",
    price: 199
}
function handleObject(anyobject) { //? use anyobject as reference
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user) //* Username is tony Stark and price is 199
handleObject({ //? passing direct object
    username: "steve rogers",
    price: 299
}) //* Username is steve rogers and price is 299

//! Usage & Passing of arrays in functions
const arr = [200,300,400,500]
function returnSecondValue(getArray) { //? use getArray as reference
    return getArray[1]
}
console.log(returnSecondValue(arr)); //* 300
console.log(returnSecondValue([10,20,30,40])); //? passing direct array

// Scopes in JS
//! Problem with var
if(true) {
    let a = 1
    const b = 2
    var c = 3
}
////console.log(a); //* ERROR => which is correct because a is defined inside the if block, it can only be used inside that block of code
////console.log(b); //* ERROR
console.log(c); //* 3 => it can be used outside the block of code it is declared (PROBLEM) => Hence, let is more preferred {var => issues in block & functional scope}

//! Global Scope => A variable declared outside any function or block. It can be accessed anywhere in the code.
let x = 10
function printx() {
    console.log(x) //* 10 => x is a global variable and can be accessed
}
printx() //* 10

//! Local Scope => A variable declared inside a function or block. It can only be accessed there.
function printy() {
    let y = 10 //* can only be used inside this block i.e this fxn
    console.log(y); //* 10 => y can only be accessed here
}
////console.log(y) //* error => y is not defined => y is a local variable and can't be accessed globally

//! Nested Scopes / closure(?)
function one() {
    const username = "thor"
    function two() {
        const website = "youtube"
        console.log(username); //* thor => username has a global scope for this fxn and hence it can be accessed    
    }
    //console.log(website); //* throwing error bcz website has a local scope inside fxn two and not be accessed anywhere else
    two()
}
one()

if(true) {
    const username = "antman"
    if(username === "antman") {
        const website = "X"
        console.log(username + website); //* antmanX    
    }
    ////console.log(website); //* Error
    
}
////console.log(username); //* Error

//! Important
console.log(addOne(2)) //* 3
function addOne(num) { //* FUNCTION
    return num+1
}

////console.log(addTwo(3)) //? error => Cannot access 'addTwo' before initialization
const addTwo = function(num) { //* FUNCTION => it's also a EXPRESSION, a different method to declare a fxn => declaring a fxn and simultanously a variable is holding it
    return num+2
}

// this & Arrow Functions
//! this function
const webuser = {
    username: "krish",
    price: 999,
    welcomeMsg: function() {
        console.log(`${this.username} welcome to website`) //? while referring to current context (present time) [this] is used, It tells about current values
        console.log(this) //* { username: 'krish', price: 999, welcomeMsg: [Function: welcomeMsg] }
    }
}
console.log(webuser.welcomeMsg()); //* krish welcome to website
webuser.username = "blaze" //* context changed and now according to the current context username: "blaze"
console.log(webuser.welcomeMsg()); //* blaze welcome to website
//* { username: 'blaze', price: 999, welcomeMsg: [Function: welcomeMsg] }
console.log(this) //* {} : in strict environment (here global has no context currently), otherwise : global object (in browser)
//? when it is executed in browser it shows Windows objects.

function printThis() {
    let username = "peter"
    console.log(this.username); //* undefined (?)
}
printThis()

const printThis2 = function() {
    let username = "peter"
    console.log(this.username); //* undefined
}
console.log(printThis())

//! Arrow Functions
const fxn = () => {
    let username = "peter"
    console.log(this.username); //* undefined
    console.log(this); //* {}
}
fxn()

//? Basic Arrow function
const mulTwo = (num1, num2) => {
    return num1*num2
}
console.log(mulTwo(2,3))

//? Implicit Return
const subTwo = (num1, num2) => (num1-num2) //* Curly braces used => return statement should be used, if parentheses are used no return statement [this method is used in REACT]
console.log(subTwo(2,1)); //* 1

const returnObj = () => ({username: "krish"}) //* returning Object
console.log(returnObj()); //* { username: 'krish' }

// Immediately Invoked Function Expression (IIFE)
//? An IIFE (Immediately Invoked Function Expression) is a function that runs as soon as it is defined. It helps create a private scope and avoid polluting the global namespace.
(function func() { //* syntax -> (fxn)(), it is a named IIFE (named func)
    console.log(`DB CONNECTED`);
}) (); //* semicolon is must while writing more than one IIFE

((name) => { //* using arrow fxn, unnamed IIFE, passing of parameters
    console.log(`DB CONNECTED TWO ${name}`);
}) ("witch");