"use strict";
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

console.log(this);

function calcAge(birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
}

calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAgeArrow(1991);

const jonas = {
  year: 1991,
  calcAge() {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};
matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f.year = 2002;
f();
