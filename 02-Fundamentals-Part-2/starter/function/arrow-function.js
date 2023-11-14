"use strict";

const calcAge3 = (brithYear) => 2037 - brithYear;

const age3 = calcAge3(2002);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  return `${firstName} retires in ${65 - age} years`;
};
console.log(yearsUntilRetirement(2002, "Hao"));

// arrow functions do not have `this` keyword
