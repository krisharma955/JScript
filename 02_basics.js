// Arrays in JS
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


