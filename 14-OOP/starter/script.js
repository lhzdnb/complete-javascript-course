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
 *
 */

const lhzdnb = new Person('lhzdnb', 2002);
const chiaki = new Person('chiaki', 2002);
console.log(lhzdnb, chiaki);
const lh = 'lh';
console.log(lhzdnb instanceof Person);
console.log(lh instanceof Person);

Person.hey = function () {
  console.log('Hey there');
  console.log(this);
};
Person.hey();

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

///////////////////////////////////////
// code challenge 1
/* function Car(make, speed) {
 this.make = make;
 this.speed = speed;
 }
 
 const car1 = new Car('BMW', 120);
 const car2 = new Car('Mercedes', 95);
 console.log(car1.make, car2.make);
 
 Car.prototype.accelerate = function () {
 this.speed += 10;
 };
 Car.prototype.brake = function () {
 this.speed -= 5;
 };
 
 car1.accelerate();
 console.log(car1.speed);
 car1.accelerate();
 console.log(car1.speed);
 car1.brake();
 console.log(car1.speed);
 
 car2.accelerate();
 console.log(car2.speed);
 car2.accelerate();
 console.log(car2.speed);
 car2.brake();
 console.log(car2.speed); */

// class expression
// const PersonCl = class {
//
// }

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // instance method
  calcAge() {
    console.log(2023 - this.birthYear);
  }

  get age() {
    return 2023 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name.`);
  }

  get fullName() {
    return this._fullName;
  }

  // static method
  static hey() {
    console.log('Hey there');
    console.log(this);
  }
}

const lianghao = new PersonCl('Liang Hao', 2002);
console.log(lianghao);
lianghao.calcAge();
console.log(lianghao.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.fullName}`);
};
lianghao.greet();

// 1. Classes are not hoisted
// 2. Class are first-class citizens
// 3. Classes are executed in strict mode

const walter = new PersonCl('Walter White', 2020);

const account = {
  owner: 'lhzdnb',
  movement: [200, 530, 120, 300],

  get latest() {
    return this.movement.slice(-1).pop();
  },

  set latest(mov) {
    this.movement.push(mov);
  },
};

console.log(account.latest);
console.log(account.movement);

account.latest = 50;
console.log(account.movement);
console.log(lianghao.age);
console.log(lianghao.fullName);

PersonCl.hey();
