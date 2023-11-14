"use strict";

const lh = {
  firstName: "Hao",
  lastName: "Liang",
  birthYear: 2002,
  job: "lhzdnb",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,
};

console.log(lh);
console.log(lh.firstName);
console.log(lh["lastName"]);

// bracket notation is more flexible because we can put any expression inside the bracket
const nameKey = "Name";
console.log(lh[`first${nameKey}`]);

const interestedIn = prompt(
  "What do you want to know about lh? Choose between firstName, lastName, age, job, and friends",
);

if (lh[interestedIn]) {
  console.log(lh[interestedIn]);
}

lh.location = "China";
lh["twitter"] = "@lhzdnb";
console.log(lh);
