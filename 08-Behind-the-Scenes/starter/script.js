"use strict";
// console.log(this);
// function lhzdnb() {
//   console.log(this);
// }
// lhzdnb();
//
// function calAge(birthYear) {
//   const age = 2037 - birthYear;
//
//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}.`;
//     console.log(output);
//
//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millennial = true;
//       // creating NEW variable with same name as outer scope's variable
//       const firstName = "Liang";
//       const str = `Oh, and you're a millennial, ${firstName}`;
//       console.log(str);
//
//       function add(a, b) {
//         return a + b;
//       }
//       // Reassigning outer scope's variable
//       output = "New output";
//     }
//
//     console.log(millennial);
//     // console.log(add(2, 3));
//     console.log(output);
//   }
//   printAge();
//   return age;
// }
//
// const firstName = "Hao";
// calAge(1991);
//

// Variables
// console.log(me);
// console.log(job);
// console.log(year);

// var me = "LH";
// let job = "student";
// const year = 2002;
//
// // Function
// console.log(typeof addExpr);
//
// function addDecl(a, b) {
//   return a + b;
// }
//
// var addExpr = function (a, b) {
//   return a + b;
// };
//
// const addArrow = (a, b) => {
//   return a + b;
// };
//
// // Example
// if (!numProducts) deleteShoppingCart();
//
// var numProducts = 10;
//
// function deleteShoppingCart() {
//   console.log("All products deleted");
// }
//
// var x = 1;
// let y = 2;
// const z = 3;
// console.log(x === window.x);
// console.log(y === window.y);

// console.log(this);
//
// function calcAge(birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// }
//
// calcAge(1991);
//
// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
//
// calcAgeArrow(1991);
//
// const jonas = {
//   year: 1991,
//   calcAge() {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// jonas.calcAge();
//
// const matilda = {
//   year: 2017,
// };
// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();
//
// const f = jonas.calcAge;
// f.year = 2002;
// f();

// let firstName = "Matilda";
//
// const jonas = {
//   year: 1991,
//   firstName: "Jonas",
//   calcAge() {
//     console.log(this);
//     console.log(2037 - this.year);
// Solution 1
// const self = this;
// function isMillenial() {
//   console.log(self);
//   console.log(self.year >= 1981 && self.year <= 1996);
// }
// isMillenial();

// Solution 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },
//   great: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// jonas.calcAge();
// jonas.great();
//
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);
//
// // Arrow function does not have argument keyword
// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 8);

// let age = 30;
// let oldAge = age;
// console.log(age === oldAge);
// age = 31;
// console.log(age);
// console.log(oldAge);
// console.log(age === oldAge);
//
// const me = {
//   name: "jonas",
//   age: 30,
// };
//
// const friend = me;
// friend.age = 27;
// console.log("Friend", friend);
// console.log("Me", me);

let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName);

const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log("Before marriage", jessica);
console.log("After marriage", marriedJessica);

// Copy objects

const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";
console.log("Before marriage", jessica2);
console.log("After marriage", jessicaCopy);

jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");
console.log("Before marriage", jessica2);
console.log("After marriage", jessicaCopy);
