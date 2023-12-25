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
console.log(lhzdnb.__proto__ === Person.prototype); // true
console.log(Person.prototype.isPrototypeOf(lhzdnb));

Person.prototype.species = 'Homo Sapiens';
console.log(lhzdnb.species, chiaki.species);
console.log(lhzdnb.hasOwnProperty('firstName'));
console.log(lhzdnb.hasOwnProperty('species'));
// lhzdnb.species 已经变成了一个独立于原型的实例属性，而不再是共享的 Person.prototype.species 属性。
// 这是 JavaScript 原型继承机制的典型表现，其中实例属性优先于原型属性。
// lhzdnb.species = '大帅逼';
// console.log(lhzdnb.species, chiaki.species, Person.prototype.species);
// console.log(lhzdnb, chiaki);

console.log(lhzdnb.__proto__.__proto__); // Object.prototype
console.log(lhzdnb.__proto__.__proto__.__proto__); // null

console.log(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 9, 3];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); // true
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);
console.dir(x => x + 1);
