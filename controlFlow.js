// ControL Flow
//! if - else if - else conditional statements
// if(condition) {} 
// else if(condition) {}
// else {}  

const userLoggedIn = true
const debitCard = true

//! switch
// switch (key) {
//     case value:
//         break;
//     default:
//         break;
// }

//! truthy & falsy values
const userEmail = "abc@gmail.com"
if(userEmail) {
    console.log("got email") 
}
else {
    console.log("no email")
}

//? falsy values
//* false, 0, -0 (-ve zero), BigInt (0n), "" (empty strings), null, undefined, NaN

//? truthy values
//* true, 1, "0", "false", " ", [] (empty array), {} (empty object), function() {} [empty fxn]

//? checking if object is empty
const emptyObj = {}
if(Object.keys(emptyObj).length === 0) { //* Object.keys(emptyObj) returns an array
    console.log("object is empty")
}

//! Nullish Coalescing Operator (??): null undefined
//? it's a safety check for null and undefined {Error handling}
let val1;
val1 = 5 ?? 10
console.log(val1); //* 5
val1 = null ?? 10
console.log(val1) //* 10
val1 = undefined ?? 15
console.log(val1); //* 15
val1 = null ?? 1 ?? 2 ?? 3
console.log(val1); //* 1 (first value is assigned after null/undefined)

//! Ternary Operator
//condition ? true : false 
const price = 100
price>=100 ? console.log("price>=100") : console.log("price<100")

