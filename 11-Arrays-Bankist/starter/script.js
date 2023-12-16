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

function displayMovement(movements) {
  containerMovements.innerHTML = "";
  movements.forEach((movement, i) => {
    const type = movement > 0 ? `deposit` : `withdrawal`;

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
        i + 1
      } ${type}</div>
      <div class="movements__value">${movement}</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
}

displayMovement(account1.movements);

console.log(containerMovements.innerHTML);

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
/////////////////////////////////////////////////

/////////////////////////////////////////////////
// code challenge # 1
