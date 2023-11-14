"use strict";

const friends = ["Michael", "Steven", "peter"];
// push add the new element and return the new length
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

// unshift add the new element at the beginning and return the new length
console.log(friends.unshift("John"));
console.log(friends);

// pop remove the last element and return the removed element
const popped = friends.pop();
console.log(popped);
console.log(friends);

// shift remove the first element and return the removed element
const shifted = friends.shift();
console.log(shifted);
console.log(friends);

// indexOf return the index of the element
console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob")); // -1 means not exist

// includes return true or false
console.log(friends.includes("Steven")); // true means exist
console.log(friends.includes("Bob")); // false means not exist
