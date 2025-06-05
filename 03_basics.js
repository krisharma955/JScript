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
console.log(calculateCartPrice(10,20,30)); //* [ 10, 20, 30 ] => after using rest => multiple arguments can be entered and a array is returned => and hence we can manupilate the data in the array accordingly
//? Rest and Spread Operator both are (...), they vary according to the use

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

