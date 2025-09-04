// for loop
// for(let i = 1; i<=10; i++) {
//     console.log(i)
// }

// const arr = [1,2,3,4,5]
// for(let i = 0; i<arr.length; i++) {
//     console.log(arr[i])
// }

// //! break & continue statement
// //? break => The break statement terminates the loop entirely, and the control moves to the code after the loop.
// for (let i = 1; i <= 5; i++) {
//   if (i === 3) break;
//   console.log(i);
// }
// //* Output: 1 2
// //? continue => The continue statement skips the current iteration and moves to the next iteration of the loop.
// for (let i = 1; i <= 5; i++) {
//   if (i === 3) continue;
//   console.log(i);
// }
// //* Output: 1 2 4 5

// //! while loop
// let n = 5
// while(n>0) {
//     console.log(n)
//     n--
// } //* 5 4 3 2 1

// //! do-while loop
// do {
//     console.log(n)
//     n++
// }
// while(n<=10)
// //? this loop runs atleast one time

// High Order Array Loops
// //! for of loop
const arr = [1,2,3,4,5] //* on arrays
for (const i of arr) {
    console.log(i);
}

const greetings = "Hello World!" //* on strings
for(const i of greetings) {
    console.log(`Each char is ${i}`);
}

//! Maps(Data type) => It has unique values (key-value pairs)
const map = new Map()
map.set("IN", "India")
map.set("IN", "India")
map.set("UK", "United Kingdom")
map.set("Fr", "France")
console.log(map) //* Map(3) { 'IN' => 'India', 'UK' => 'United Kingdom', 'Fr' => 'France' }
//? India only came once inside it, maps holds unique values and order

for(const [key, value] of map) {
    console.log(key, ":-", value);
}

const myobj = {
    "game1": "pes",
    "game2": "fifa"
}
for(const [key,value] of myobj) {
    
}
