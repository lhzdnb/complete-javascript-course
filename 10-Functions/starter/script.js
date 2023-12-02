"use strict";

/*
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
console.log(lhzdnb);
