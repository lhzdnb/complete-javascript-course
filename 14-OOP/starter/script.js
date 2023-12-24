'use strict';

function Person(firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  // never create methods in constructor functions
}

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to Prototype
// 4. function automatically return {}

const lhzdnb = new Person('lhzdnb', 2002);
const chiaki = new Person('chiaki', 2002);
console.log(lhzdnb, chiaki);
const lh = 'lh';
console.log(lhzdnb instanceof Person);
console.log(lh instanceof Person);
