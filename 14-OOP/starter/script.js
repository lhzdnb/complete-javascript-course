'use strict';

/* function Person(firstName, birthYear) {
 this.firstName = firstName;
 this.birthYear = birthYear;
 // never create methods in constructor functions
 } */

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
/*
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
 console.dir(x => x + 1); */

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
/* class PersonCl {
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
 }; */
/*
 console.log(account.latest);
 console.log(account.movement);
 
 account.latest = 50;
 console.log(account.movement);
 console.log(lianghao.age);
 console.log(lianghao.fullName);
 
 PersonCl.hey(); */

/* const PersonProto = {
 calcAge() {
 console.log(2023 - this.birthYear);
 },
 
 init(firstName, birthYear) {
 this.firstName = firstName;
 this.birthYear = birthYear;
 },
 };
 
 const steven = Object.create(PersonProto);
 console.log(steven);
 steven.name = 'Steven';
 steven.birthYear = 2002;
 steven.calcAge();
 console.log(steven.__proto__ === PersonProto);
 
 const sarah = Object.create(PersonProto);
 sarah.init('Sarah', 1979);
 sarah.calcAge();
 console.log(sarah); */

////////////////////////////////////////////
// coding challenge # 2
/*
 class Car {
 constructor(make, speed) {
 this.make = make;
 this.speed = speed;
 }
 
 accelerate() {
 this.speed += 10;
 }
 
 brake() {
 this.speed -= 5;
 }
 
 get speedUS() {
 return this.speed / 1.6;
 }
 
 set speedUS(speed) {
 this.speed = 1.6 * speed;
 }
 }
 
 const ford = new Car('Ford', 120);
 console.log(ford.make, ford.speed);
 ford.accelerate();
 console.log(ford.speed);
 ford.brake();
 console.log(ford.speed);
 
 console.log(ford.speedUS);
 ford.speedUS = 100;
 console.log(ford.speed);
 */

/*
 ////////////////////////////////
 // inherit
 function Person(firstName, birthYear) {
 this.firstName = firstName;
 this.birthYear = birthYear;
 }
 
 Person.prototype.calcAge = function () {
 console.log(2023 - this.birthYear);
 };
 
 function Student(firstName, birthYear, course) {
 Person.call(this, firstName, birthYear);
 this.course = course;
 }
 
 // Linking prototype
 Student.prototype = Object.create(Person.prototype);
 
 Student.prototype.introduce = function () {
 console.log(`My name is ${this.firstName} and I study ${this.course}`);
 };
 
 const mike = new Student('Mike', 2020, 'Computer Science');
 mike.introduce();
 console.log(mike);
 mike.calcAge();
 
 console.log(mike.__proto__);
 console.log(mike.__proto__.__proto__);
 
 console.log(mike instanceof Student);
 console.log(mike instanceof Person);
 console.log(mike instanceof Object);
 
 Student.prototype.constructor = Student;
 console.log(Student.prototype.constructor);
 */

/////////////////////////////////////////////////////
// coding challenge # 3
/*
 function Car(make, speed) {
 this.make = make;
 this.speed = speed;
 }
 
 Car.prototype.accelerate = function () {
 this.speed += 10;
 console.log(this.speed);
 };
 Car.prototype.brake = function () {
 this.speed -= 5;
 console.log(this.speed);
 };
 
 function EV(make, speed, charge) {
 Car.call(this, make, speed);
 this.charge = charge;
 }
 
 EV.prototype = Object.create(Car.prototype);
 EV.prototype.constructor = EV;
 
 EV.prototype.chargeBattery = function (chargeTo) {
 this.charge = chargeTo;
 };
 
 EV.prototype.accelerate = function () {
 this.speed += 20;
 this.charge -= 1;
 console.log(
 `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`,
 );
 };
 
 const tesla = new EV('Tesla', 120, 23);
 console.log(tesla);
 
 tesla.accelerate();
 tesla.brake();
 tesla.accelerate();
 tesla.chargeBattery(80);
 console.log(tesla.charge);
 */

///////////////////////////////////////////
// Inheritance Between "Classes": ES6 Classes
/*
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
 }
 }
 
 class StudentCl extends PersonCl {
 constructor(fullName, birthYear, course) {
 // always needs to happen first!
 super(fullName, birthYear); // also create this keyword
 this.course = course;
 }
 
 introduce() {
 console.log(`My name is ${this.fullName} and I study ${this.course}`);
 }
 
 calcAge() {
 console.log(
 `I am ${
 2023 - this.birthYear
 } years old, but as a student I feel more like ${
 2023 - this.birthYear + 10
 }`,
 );
 }
 }
 
 const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
 martha.introduce();
 martha.calcAge();
 */

//////////////////////////////////////////////////
// Inheritance between "classes": Object.create
/*
 const PersonProto = {
 calcAge() {
 console.log(2037 - this.birthYear);
 },
 init(firstName, birthYear) {
 this.firstName = firstName;
 this.birthYear = birthYear;
 },
 };
 
 const steven = Object.create(PersonProto);
 
 const StudentProto = Object.create(PersonProto);
 StudentProto.init = function (firstName, birthYear, course) {
 PersonProto.init.call(this, firstName, birthYear);
 this.course = course;
 };
 
 StudentProto.introduce = function () {
 console.log(`My name is ${this.firstName} and I study ${this.course}`);
 };
 
 const jay = Object.create(StudentProto);
 jay.init('jay', 2010, 'Computer Science');
 jay.introduce();
 jay.calcAge();
 */

// Public fields
// private fields
// public methods
// private methods
// there is also a static version
/*
 class Account {
 // public fields (instances)
 locale = navigator.language;
 
 // private fields (instances)
 #movements = [];
 #pin;
 
 // public methods
 // public interfaces
 constructor(owner, currency, pin) {
 this.owner = owner;
 this.currency = currency;
 this.#pin = pin;
 // protected property
 this.#movements = [];
 this.locale = navigator.language;
 
 console.log(`Thanks for opening an account, ${this.owner}`);
 }
 
 // public interface
 getMovements() {
 return this.#movements;
 }
 
 deposit(val) {
 this.#movements.push(val);
 return this;
 }
 
 withdraw(val) {
 this.deposit(-val);
 return this;
 }
 
 requestLoan(val) {
 if (this.#approveLoan(val)) {
 this.deposit(val);
 console.log('Loan approved');
 return this;
 }
 }
 
 // private methods
 #approveLoan(val) {
 return true;
 }
 
 static helper() {
 console.log('Helper');
 }
 }
 
 const acc1 = new Account('Liang', 'EUR', 1111);
 acc1.deposit(250);
 acc1.withdraw(140);
 acc1.requestLoan(1000);
 console.log(acc1.getMovements());
 console.log(acc1);
 
 Account.helper();
 
 // Chaining
 acc1.deposit(300).deposit(500).withdraw(35).requestLoan(30000);
 */

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(val) {
    this.speed = val * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}%`,
    );
    return this;
  }

  chargeBattery(val) {
    this.#charge = val;
    console.log(`Battery charged to ${val}%`);
    return this;
  }
}

const Rivian = new EVCl('Rivian', 120, 23);
Rivian.accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();
console.log(Rivian.speedUS);
Rivian.speedUS = 100;
console.log(Rivian.speed);
