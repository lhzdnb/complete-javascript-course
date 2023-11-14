"use strict";

const lhObject = {
  firstName: "Hao",
  lastName: "Liang",
  birthYear: 2002,
  job: "lhzdnb",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,
  // calcAge: function (birthYear) {
  //   return 2023 - birthYear;
  // },
  // calcAge: function () {
  //   console.log(this);
  //   return 2023 - this.birthYear;
  // },
  calcAge: function () {
    console.log(this);
    this.age = 2023 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(lhObject.calcAge());
console.log(lhObject["calcAge"]());
console.log(lhObject.age);
console.log(lhObject);
