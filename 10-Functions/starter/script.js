"use strict";

/*
 //////////////////////////////////////////
 // Default parameters
 const bookings = [];
 const createBooking = function (
 flightNum,
 numPassengers = 1,
 price = 199 * numPassengers,
 ) {
 // ES5
 // numPassengers = numPassengers ?? 1;
 // price = price ?? 199
 
 const booking = {
 flightNum,
 numPassengers,
 price,
 };
 console.log(booking);
 bookings.push(booking);
 };
 
 createBooking("LH123");
 createBooking("LH123", 2, 800);
 createBooking("LH123", 2);
 createBooking("LH123", 5);
 
 createBooking("LH123", undefined, 1000);
 */

/*
 ////////////////////////////////////////////////
 // How Passing Arguments Works: Values vs. Reference
 const flight = "LH234";
 const lhzdnb = {
 name: "Hao Liang",
 passport: 123345678,
 };
 
 function checkIn(flightNum, passenger) {
 flightNum = "lH999";
 // Reference!!! It is the same memory in the heap
 passenger.name = "MR. " + passenger.name;
 
 if (passenger.passport === 123345678) {
 alert("Check in");
 } else {
 alert("Wrong passport");
 }
 }
 
 checkIn(flight, lhzdnb);
 console.log(flight);
 console.log(lhzdnb);
 
 function newPassport(person) {
 person.passport = Math.trunc(Math.random() * 1000000);
 }
 
 newPassport(lhzdnb);
 checkIn(flight, lhzdnb);
 console.log(flight);
 console.log(lhzdnb); */

/*
 //////////////////////////////////////
 // Functions accepting callback functions
 
 function oneWord(str) {
 return str.replaceAll(" ", "").toLowerCase();
 }
 
 function upperFirstWord(str) {
 const [firstWord, ...others] = str.split(" ");
 return [firstWord.toUpperCase(), ...others].join(" ");
 }
 
 // Higher-order function
 function transformer(str, func) {
 console.log(`Original string: ${str}`);
 console.log(`Transformed string: ${func(str)}`);
 console.log(`Transformed by: ${func.name}`);
 }
 
 transformer("JavaScript is the best!", upperFirstWord);
 transformer("JavaScript is the best!", oneWord);
 
 const high5 = function () {
 console.log("👋");
 };
 
 document.body.addEventListener("click", high5);
 
 ["Jonas", "Martha", "Adam"].forEach(high5); */

/*
 //////////////////////////////////////////////
 // Functions returning Functions
 // const greet = function (greeting) {
 //   return function (name) {
 //     console.log(`${greeting} ${name}`);
 //   };
 // };
 
 const greet = greeting => name => console.log(`${greeting} ${name}`);
 
 const greeterHey = greet("Hey");
 greeterHey("Hao");
 greeterHey("Liang");
 
 greet("Hello")("Hao");
 */

/* const lufthansa = {
 airline: "Lufthansa",
 iataCode: "LH",
 bookings: [],
 book(flightNum, name) {
 console.log(
 `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`,
 );
 this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
 },
 };
 
 lufthansa.book(239, "Hao Liang");
 lufthansa.book(635, "lhzdnb");
 console.log(lufthansa);
 const eurowings = {
 airline: "Eurowings",
 iataCode: "EW",
 bookings: [],
 };
 
 const book = lufthansa.book;
 
 // Does not work
 // book(23, "Hao Liang");
 // call method
 book.call(eurowings, 23, "Hao Liang");
 console.log(eurowings);
 
 book.call(lufthansa, 239, "Mary Cooper");
 console.log(lufthansa);
 
 const swiss = {
 airline: "Swiss Airline",
 iataCode: "LX",
 bookings: [],
 };
 
 book.call(swiss, 583, "Hao Liang");
 console.log(swiss);
 
 // Apply method
 const flightData = [583, "George Cooper"];
 book.apply(swiss, flightData);
 console.log(swiss);
 
 book.call(swiss, ...flightData);
 console.log(swiss);
 
 // Bind method
 const bookEw = book.bind(eurowings);
 const bookLH = book.bind(lufthansa);
 const bookLX = book.bind(swiss);
 bookEw(23, "Steven Williams");
 
 const bookEW23 = book.bind(eurowings, 12345);
 bookEW23("Hao Liang");
 bookEW23("Martha Cooper");
 
 // With Event Listeners
 lufthansa.planes = 300;
 lufthansa.buyPlane = function () {
 console.log(this);
 this.planes++;
 console.log(this.planes);
 };
 
 document
 .querySelector(".buy")
 // not call because we don't want to call it immediately
 .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));
 
 // Partial application
 const addTax = (rate, value) => value + value * rate;
 console.log(addTax(0.1, 200));
 
 const addVAT = addTax.bind(null, 0.23);
 // addVAT = value => value + value * 0.23;
 console.log(addVAT(100));
 console.log(addVAT(23));
 
 function addTaxRate(rate) {
 return function (value) {
 return value + value * rate;
 };
 }
 
 console.log(addTaxRate(0.1)(200));
 const addVAT2 = addTaxRate(0.23);
 console.log(addVAT2(100)); */

///////////////////////////////////////
// Coding Challenge #1

/*
 Let's build a simple poll app!
 
 A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.
 
 Here are your tasks:
 
 1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
 1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
 What is your favourite programming language?
 0: JavaScript
 1: Python
 2: Rust
 3: C++
 (Write option number)
 
 1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
 2. Call this method whenever the user clicks the "Answer poll" button.
 3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
 4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
 
 HINT: Use many of the tools you learned about in this and the last section 😉
 
 BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what should the this keyword look like in this situation?
 
 BONUS TEST DATA 1: [5, 2, 3]
 BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
 
 GOOD LUCK 😀
 */

/* const poll = {
 question: "What is your favourite programming language?",
 options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
 answers: [0, 0, 0, 0],
 registerNewAnswer() {
 const message = this.question + "\n" + this.options.join("\n");
 const ans = prompt(message);
 if (ans >= "0" && ans <= "3") {
 this.answers[Number(ans)]++;
 }
 this.displayResults("string");
 },
 displayResults(type = "array") {
 if (type === "array") {
 console.log(this.answers);
 } else if (type === "string") {
 console.log(`Poll results are ${this.answers.join(", ")}`);
 }
 },
 };
 
 document.querySelector(".poll").addEventListener("click", () => {
 poll.registerNewAnswer();
 });
 
 poll.displayResults.call({ answers: [5, 2, 3] }, "string");
 poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");
 poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }); */

/*
 ///////////////////////////////////////////////////
 // IIFE: Immediately Invoked Function Expressions
 const runOnce = function () {
 console.log("This will never run again");
 };
 runOnce();
 
 (function () {
 console.log("This will never run again");
 })();
 
 (() => console.log("This will ALSO never run again"))();
 
 // encapsulation 封装
 {
 const isPrivate = 23;
 var notPrivate = 46;
 }
 console.log(isPrivate);
 console.log(notPrivate); */

///////////////////////////////////////
// Closure

// Any function always has access to the variable environment of the execusion content in which the function was created.
// Closure: VE attached to the function, exactly as it was at the time and place the function was created.
// Closure is prior to the scope chain.

// A closure is the closed-over **variable environment** of the execution context **in which a function was created**, even after that execution context is gone;

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker(); // 1 passenger
booker(); // 2 passenger
booker();

console.dir(booker);
