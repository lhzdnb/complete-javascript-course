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

const lufthansa = {
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
