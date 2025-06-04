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
    //* (username === undefined) can also be used
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMsg("tony stark")); //* tony stark just logged in
console.log(loginUserMsg()); //* undefined just logged in => the parameter (username) is not defined