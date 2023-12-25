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

/**
 * The comments in the code explain what happens when the `new` keyword is
 * used:
 *
 * 1. A new empty object `{}` is created.
 * 2. The constructor function (`Person` in this case) is called with `this`
 * set to the newly created object.
 * 3. The new object is linked to the prototype of the constructor function.
 * 4. The function automatically returns the new object.
 *
 * The `instanceof` operator is used to check if an object is an instance of a
 * particular constructor function. In the code, it's used to check if `lhzdnb`
 * and `lh` are instances of `Person`.
 * @type {Person}
 */

const lhzdnb = new Person('lhzdnb', 2002);
const chiaki = new Person('chiaki', 2002);
console.log(lhzdnb, chiaki);
const lh = 'lh';
console.log(lhzdnb instanceof Person);
console.log(lh instanceof Person);

// prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

lhzdnb.calcAge();
chiaki.calcAge();

console.log(lhzdnb.__proto__);
console.log(lhzdnb.__protp__ === Person.prototype); // false
console.log(Person.prototype.isPrototypeOf(lhzdnb));

Person.prototype.species = 'Homo Sapiens';
console.log(lhzdnb.species, chiaki.species);
console.log(lhzdnb.hasOwnProperty('firstName'));
console.log(lhzdnb.hasOwnProperty('species'));
