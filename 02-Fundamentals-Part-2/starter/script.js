"use strict";

let hasDriverLicense = false;
const passTest = true;

// if (passTest) {
//   hasDriverLicense = true;
// }
//
// if (hasDriverLicense) {
//   console.log("I can drive :D");
// }

// we can call the function before declaration
const age1 = calcAge1(1991);
console.log(age1);

// function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

// we cannot:
// const age2 = calcAge2(1991);

// function expression
// function is a value
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age1, age2);
console.log(typeof calcAge2);
const calcAge3 = (brithYear) => 2037 - brithYear;
