"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

function displayMovements(movements, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach((movement, i) => {
    const type = movement > 0 ? `deposit` : `withdrawal`;

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
        i + 1
      } ${type}</div>
      <div class="movements__value">${movement}€</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
}

function calcDisplayBalance(account) {
  const balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  account.balance = balance;
  labelBalance.textContent = `${balance} €`;
}

function calcDisplaySummary(account) {
  const incomes = account.movements
    .filter((movement) => movement > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outs = account.movements
    .filter((movement) => movement < 0)
    .reduce((acc, mov) => acc - mov, 0);
  labelSumOut.textContent = `${outs}€`;

  const interest = account.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * account.interestRate) / 100)
    .filter((interest) => {
      return interest >= 1;
    })
    .reduce((acc, interest) => acc + interest, 0);

  labelSumInterest.textContent = `${interest}€`;
}

function createUsernames(accounts) {
  accounts.forEach((account) => {
    account.username = account.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
}

function updateUI(currentAccount) {
  // Display movements
  displayMovements(currentAccount.movements);
  // Display balance
  calcDisplayBalance(currentAccount);
  // Display summary
  calcDisplaySummary(currentAccount);
}

createUsernames(accounts);
// Event handler
let currentAccount;
btnLogin.addEventListener("click", (e) => {
  // prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value,
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and the welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = "100";

    // clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();
    // update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", (e) => {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(
    (acc) => acc.username === inputTransferTo.value,
  );

  inputTransferAmount.value = inputTransferTo.value = "";
  inputTransferAmount.blur();

  if (
    amount > 0 &&
    amount <= currentAccount.balance &&
    receiverAccount &&
    receiverAccount.username !== currentAccount.username
  ) {
    // Transfer
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);

    // update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener("click", (e) => {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= 0.1 * amount)
  ) {
    // add the movement
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
  inputLoanAmount.blur();
});
btnClose.addEventListener("click", (e) => {
  e.preventDefault();

  console.log("Delete");
  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username,
    );
    console.log(index);
    // delete account
    accounts.splice(index, 1);
    // hide UI
    containerApp.style.opacity = "0";
  }
  inputCloseUsername.value = inputCloseUsername.value = "";
  labelWelcome.textContent = "Log in to get started";
});

let isSorted = false;
btnSort.addEventListener("click", (e) => {
  e.preventDefault();
  displayMovements(currentAccount.movements, !isSorted);
  isSorted = !isSorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*
 ////////////////////////////////////
 // simple array method
 let arr = ['a', 'b', 'c', 'd', 'e'];
 
 // slice
 console.log(arr.slice(2));
 console.log(arr.slice(2, 4));
 console.log(arr.slice(-2));
 console.log(arr.slice(-1));
 console.log(arr.slice(1, -2)); // starting from the first element and excluding
 // the last two
 console.log(arr.slice());
 console.log([...arr]);
 
 // splice MUTATE THE ORIGINAL ARRAY
 // console.log(arr.splice(2)); // ['c', 'd', 'e']
 arr.splice(-1);
 arr.splice(1, 2);
 console.log(arr); // ['a', 'b']
 
 // Reverse MUTATE THE ORIGINAL ARRAY
 arr = ['a', 'b', 'c', 'd', 'e'];
 const arr2 = ['j', 'i', 'h', 'g', 'j'];
 console.log(arr2.reverse());
 console.log(arr2);
 
 // concat
 const letters = arr.concat(arr2);
 console.log(letters);
 console.log([...arr, ...arr2]);
 
 // join
 console.log(letters.join(' - ')); */

/*
 ///////////////////////////////////
 // foreach()
 const arr = [23, 11, 64];
 console.log(arr[0]);
 console.log(arr.at(0));
 
 // getting the last element
 console.log(arr[arr.length - 1]);
 console.log(arr.slice(-1)[0]);
 console.log(arr.at(-1));
 
 // also works on string
 console.log("lhzdnb".at(0));
 
 const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
 
 for (const movement of movements) {
 if (movement > 0) {
 console.log(`You deposited ${movement}`);
 } else {
 console.log(`You withdraw ${movement}`);
 }
 }
 console.log("========= .foreach =========");
 // break does not work
 movements.forEach((movement, index, array) => {
 if (movement > 0) {
 console.log(`Movement ${index + 1}: You deposited ${movement}`);
 } else {
 console.log(`Movement ${index + 1}: You withdraw ${movement}`);
 }
 });
 
 console.log("========= .entries =========");
 for (const [index, movement] of movements.entries()) {
 if (movement > 0) {
 console.log(`Movement ${index + 1}: You deposited ${movement}`);
 } else {
 console.log(`Movement ${index + 1}: You withdraw ${movement}`);
 }
 }
 */

/*
 //////////////////////////////////
 // forEach with Maps and Sets
 // Map
 const currencies = new Map([
 ["USD", "United States dollar"],
 ["EUR", "Euro"],
 ["GBP", "Pound sterling"],
 ]);
 
 currencies.forEach((value, key, map) => {
 console.log(`${key}: ${value}`);
 });
 
 // Set
 const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
 currenciesUnique.forEach((value, _, map) => {
 console.log(`${value}`);
 });
 */

/*
 /////////////////////////////////////////////////
 // map
 const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
 const eurToUsd = 1.1;
 const movementsUSD = movements.map((mov) => mov * eurToUsd);
 console.log(movementsUSD);
 
 const movementsUSDfor = [];
 for (const move of movements) {
 movementsUSDfor.push(move * eurToUsd);
 }
 console.log(movementsUSDfor);
 
 const movementsDescriptions = movements.map(
 (mov, i) =>
 `Movement ${i + 1}: You ${mov > 0 ? "deposit" : "withdraw"} ${mov}`,
 );
 console.log(movementsDescriptions);
 */
/*
 ////////////////////////////////////
 // filter
 const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
 const deposits = movements.filter((movement) => movement > 0);
 
 console.log(deposits);
 
 const withdrawal = movements.filter((movement) => movement < 0);
 console.log(withdrawal);
 */

////////////////////////////////////
// reduce
/*
 const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
 const balance = movements.reduce(
 (accumulator, current) => (accumulator += current),
 0,
 );
 console.log(balance);
 
 // Maximum value
 const max = movements.reduce(
 (acc, cur) => (acc > cur ? acc : cur),
 movements[0],
 );
 console.log(max);
 */
/////////////////////////////////////////
// chaining method
/* const eurToUsd = 1.1;
 const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
 
 // Pipeline
 const totalDepositsUSD = movements
 .filter((movement) => movement > 0)
 .map((movement, i, arr) => {
 // console.log(arr);
 return movement * eurToUsd;
 })
 // .map(mov => mov * eurToUsd);
 .reduce((acc, cur) => acc + cur, 0);
 
 console.log(totalDepositsUSD);
 */

/////////////////////////////////////
// find
// returns the first element that satisfies the condition
/*
 const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
 const firstWithdrawal = movements.find((mov) => mov < 0);
 console.log(firstWithdrawal);
 
 console.log(accounts);
 const account = accounts.find((acc) => acc.owner === "Jessica Davis");
 console.log(account);
 */

/*
 /////////////////////////////////////
 // some and every
 const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
 console.log(movements.includes(-130));
 
 // some method
 // returns true if there is at least one element that satisfies the condition
 const anyDeposits = movements.some((mov) => mov > 1500);
 console.log(anyDeposits);
 
 // every
 // returns true if every element satisfies the condition
 console.log(account4.movements.every((mov) => mov > 0));
 
 // separate callback
 const deposit = (mov) => mov > 0;
 console.log(movements.some(deposit));
 console.log(movements.every(deposit));
 console.log(movements.filter(deposit));
 */

/*
 ////////////////////////////////////
 // flat and flatMap
 const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
 console.log(arr.flat());
 
 const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
 console.log(arrDeep.flat());
 console.log(arrDeep.flat(2));
 
 // flat
 const overallBalance = accounts
 .map((acc) => acc.movements)
 .flat()
 .reduce((acc, mov) => acc + mov, 0);
 console.log(overallBalance);
 
 // flatMap
 const overallBalance2 = accounts
 .flatMap((acc) => acc.movements)
 .reduce((acc, mov) => acc + mov, 0);
 console.log(overallBalance2);
 */

/*
 ///////////////////////////////////////
 // sort
 // strings
 const owners = ["Jonas", "Zach", "Adam", "Martha"];
 console.log(owners.sort());
 console.log(owners);
 
 // numbers
 const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
 
 // ascending
 console.log(movements.sort((a, b) => a - b));
 // descending
 console.log(movements.sort((a, b) => b - a));
 */

/*
 ////////////////////////////////////////////////////
 // creating and filling arrays
 const x = new Array(7);
 console.log(x);
 
 x.fill(1, 3, 5);
 console.log(x);
 
 const arr = [1, 2, 3, 4, 5, 6, 7];
 arr.fill(23, 4, 6);
 console.log(arr);
 
 // from
 const y = Array.from({ length: 7 }, (_, index) => index + 1);
 console.log(y);
 
 labelBalance.addEventListener("click", () => {
 const movementsUI = Array.from(
 document.querySelectorAll(".movements__value"),
 (element) => element.textContent.replace("€", ""),
 );
 console.log(movementsUI);
 
 const movementsUI2 = [...document.querySelectorAll(".movements__value")];
 const newMovementsUI2 = movementsUI2.map((movement) =>
 movement.textContent.replace("€", ""),
 );
 console.log(newMovementsUI2);
 });
 */

/////////////////////////////////////////////////
// Array Methods Practice
const bankDepositSum = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);
console.log(bankDepositSum);

// 2.
const numDeposits1000 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, cur) => (cur >= 1000 ? ++acc : acc), 0);
console.log(numDeposits1000);

let a = 10;
console.log(a++); // return and add 1
console.log(++a); // add 1 and return

// 3.
const { deposits, withdrawals } = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? "deposits" : "withdrawals"] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 },
  );

console.log(deposits, withdrawals);

// 4.
// this is a nice title -> This Is a Nice Title
function convertTitle(title) {
  const exceptions = [
    "a",
    "an",
    "am",
    "and",
    "the",
    "but",
    "or",
    "on",
    "in",
    "with",
  ];
  return title
    .toLowerCase()
    .split(" ")
    .map((word) =>
      exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1),
    )
    .join(" ");
}

console.log(convertTitle("this is a nice title"));
console.log(convertTitle("this is a LONG title but not too long"));
console.log(convertTitle("and here is another title with an EXAMPLE"));
/////////////////////////////////////////////////

/////////////////////////////////////////////////
// code challenge # 1
// function checkDogs(dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice();
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);
//   const dogs = dogsJuliaCorrected.concat(dogsKate);
//   dogs.forEach((age, index) => {
//     if (age >= 3) {
//       console.log(
//         `Dog number ${index + 1} is an adult, and is ${age} years old`,
//       );
//     } else {
//       console.log(`Dog number ${index + 1} is still a puppy 🐶`);
//     }
//   });
// }
//
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

/////////////////////////////////////////////////
// code challenge # 2
// function calcAverageHumanAge(ages) {
//   return ages
//     .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter((age) => age >= 18)
//     .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
// }
//
// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

///////////////////////////////////////////////////
// final challenge
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// 1.
dogs.forEach((dog) => (dog.recommendedFood = dog.weight ** 0.75 * 28));
console.log(dogs);

// 2.
let sarahDog = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(
  sarahDog.curFood >= sarahDog.recommendedFood &&
    sarahDog.curFood <= sarahDog.recommendedFood,
);

// 3.
const ownerEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recommendedFood)
  .flatMap((dog) => dog.owners);
console.log(ownerEatTooMuch);

const ownerEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recommendedFood)
  .flatMap((dog) => dog.owners);
console.log(ownerEatTooLittle);

// 4.
const ownerEatTooMuchString = ownerEatTooMuch.join(" and ");
console.log(ownerEatTooMuchString + "'s dogs eat too much!");

const ownerEatTooLittleString = ownerEatTooLittle.join(" and ");
console.log(ownerEatTooLittleString + "'s dogs eat too little!");

// 5.
console.log(dogs.some((dog) => dog.curFood === dog.recommendedFood));

// 6.
const checkEatingOK = (dog) =>
  dog.curFood < dog.recommendedFood * 1.1 &&
  dog.curFood > dog.recommendedFood * 0.9;

console.log(dogs.some(checkEatingOK));

// 7.
const dogsEatingOK = dogs.filter(checkEatingOK);
console.log(dogsEatingOK);

// 8.
const dogsSorted = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsSorted);
