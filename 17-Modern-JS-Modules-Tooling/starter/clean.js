"use strict";

const budget = Object.freeze([
  { value: 250, description: "Sold old TV 📺", user: "jonas" },
  { value: -45, description: "Groceries 🥑", user: "jonas" },
  { value: 3500, description: "Monthly salary 👩‍💻", user: "jonas" },
  { value: 300, description: "Freelancing 👩‍💻", user: "jonas" },
  { value: -1100, description: "New iPhone 📱", user: "jonas" },
  { value: -20, description: "Candy 🍭", user: "matilda" },
  { value: -125, description: "Toys 🚂", user: "matilda" },
  { value: -1800, description: "New Laptop 💻", user: "jonas" },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

const getLimit = (user) => spendingLimits?.[user] ?? 0;

// Pure function :D
const addExpanse = function (state, value, description, user = "jonas") {
  const cleanUser = user.toLowerCase();
  return value <= getLimit(cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
};
const newBudget1 = addExpanse(budget, 10, "Pizza 🍕");
const newBudget2 = addExpanse(newBudget1, 100, "Going to movies 🍿", "Matilda");

const newBudget3 = addExpanse(newBudget2, 200, "Stuff", "Jay");
console.log(newBudget1);
console.log(newBudget2);
console.log(newBudget3);

const checkExpenses = (state) =>
  state.map((entry) =>
    entry.value < -getLimit(entry.user) ? { ...entry, flag: "limit" } : entry,
  );
// for (const entry of budget)
//   if (entry.value < -getLimit(entry.user)) entry.flag = "limit";

const finalBudget = checkExpenses(newBudget3);

console.log(finalBudget);

const logBigExpenses = function (state, bigLimit) {
  const bigExpenses = state
    .filter((entry) => entry.value <= -bigLimit)
    .map((entry) => entry.description.slice(-2))
    .join(" / ");

  console.log(bigExpenses);
};

logBigExpenses(finalBudget, 500);
