'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2023-12-20T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

function formatMovementDate(date, locale) {
  const day = `${date.getDay()}`.padStart(2, '0');
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const year = date.getFullYear();

  const displayDate = `${day}/${month}/${year}`;

  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  const daysPassed = calcDaysPassed(new Date(), date);
  if (daysPassed === 0) return 'Today';
  else if (daysPassed === 1) return 'Yesterday';
  else if (daysPassed <= 7) return `${daysPassed} days ago`;
  return new Intl.DateTimeFormat(locale).format(date);
}

function formatCur(value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(Number(value));
}

function displayMovements(account, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? account.movements.slice().sort((a, b) => a - b)
    : account.movements;

  movs.forEach((movement, i) => {
    const type = movement > 0 ? `deposit` : `withdrawal`;
    const date = new Date(account.movementsDates[i]);
    const displayDate = formatMovementDate(date, account.locale);

    const formattedMov = formatCur(movement, account.locale, account.currency);

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
        i + 1
      } ${type}</div>
      <div class="movements__date">${displayDate}</div>
      <div class="movements__value">${formattedMov}</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}

function calcDisplayBalance(account) {
  const balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  account.balance = balance;
  labelBalance.textContent = `${formatCur(
    balance,
    account.locale,
    account.currency,
  )}`;
}

function calcDisplaySummary(account) {
  const incomes = account.movements
    .filter(movement => movement > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${formatCur(
    incomes,
    account.locale,
    account.currency,
  )}`;

  const outs = account.movements
    .filter(movement => movement < 0)
    .reduce((acc, mov) => acc - mov, 0);
  labelSumOut.textContent = `${formatCur(
    outs,
    account.locale,
    account.currency,
  )}`;

  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter(interest => {
      return interest >= 1;
    })
    .reduce((acc, interest) => acc + interest, 0);

  labelSumInterest.textContent = `${formatCur(
    interest,
    account.locale,
    account.currency,
  )}`;
}

function createUsernames(accounts) {
  accounts.forEach(account => {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
}

function updateUI(currentAccount) {
  // Display movements
  displayMovements(currentAccount);
  // Display balance
  calcDisplayBalance(currentAccount);
  // Display summary
  calcDisplaySummary(currentAccount);
}

createUsernames(accounts);
///////////////////////////
// Event handler
let currentAccount;

// FAKE ALWAYS LOGIN
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = '100';

// Experimenting API
const now = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  weekday: 'long',
};
const locale = navigator.language;
labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);

btnLogin.addEventListener('click', e => {
  // prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value,
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and the welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = '100';

    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      // weekday: 'long',
    };
    // const locale = navigator.language;
    // console.log(locale);

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options,
    ).format(now);

    // clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    // update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', e => {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(
    acc => acc.username === inputTransferTo.value,
  );

  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferAmount.blur();

  if (
    amount > 0 &&
    amount <= currentAccount.balance &&
    receiverAccount &&
    receiverAccount.username !== currentAccount.username
  ) {
    // Transfer
    currentAccount.movements.push(-amount);
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAccount.movements.push(amount);
    receiverAccount.movementsDates.push(new Date().toISOString());

    // update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', e => {
  e.preventDefault();
  const amount = Math.floor(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= 0.1 * amount)) {
    setTimeout(() => {
      // add the movement
      currentAccount.movements.push(amount);
      // Add transfer date
      currentAccount.movementsDates.push(new Date().toISOString());
      updateUI(currentAccount);
    }, 2500);
  }
  inputLoanAmount.value = '';
  inputLoanAmount.blur();
});
btnClose.addEventListener('click', e => {
  e.preventDefault();

  console.log('Delete');
  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username,
    );
    // delete account
    accounts.splice(index, 1);
    // hide UI
    containerApp.style.opacity = '0';
  }
  inputCloseUsername.value = inputCloseUsername.value = '';
  labelWelcome.textContent = 'Log in to get started';
});

let isSorted = false;
btnSort.addEventListener('click', e => {
  e.preventDefault();
  displayMovements(currentAccount, !isSorted);
  isSorted = !isSorted;
});

// day/month/year

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/*
 /////////////////////////////////////////////////
 // Converting and Checking Numbers
 console.log(23 === 23.0);
 console.log(0.1 + 0.2);
 console.log(Number('23'));
 console.log(+'23');
 
 // Parsing
 console.log(Number.parseInt('30px'));
 console.log(Number.parseInt('e23'));
 console.log(Number.parseInt('2.5rem'));
 console.log(Number.parseFloat('2.5rem'));
 console.log(parseFloat('2.5rem'));
 
 console.log(Number.isNaN(20));
 console.log(Number.isNaN('23'));
 
 console.log(Number.isNaN(+'20x'));
 console.log(Number.isNaN(23 / 0));
 
 // checking if value is number
 console.log(Number.isFinite(20));
 console.log(Number.isFinite('20'));
 console.log(Number.isFinite(+'20x'));
 console.log(Number.isFinite(23 / 0));
 
 console.log(Number.isInteger(23));
 console.log(Number.isInteger(23.0));
 */
/*
 ///////////////////////////////////////////
 // Math and Rounding
 console.log(Math.sqrt(25));
 console.log(25 ** (1 / 2));
 console.log(Math.max(5, 18, 23, 11, 2));
 console.log(Math.max(5, 18, '23', 11, 2));
 console.log(Math.max(5, 18, '23px', 11, 2));
 
 console.log(Math.max(5, 18, 23, 11, 2));
 console.log(Math.PI * Number.parseFloat('10px') ** 2);
 
 console.log(Math.floor(Math.random() * 6) + 1);
 
 const randomInt = (min, max) =>
 Math.trunc(Math.random() * (max - min) + 1) + min;
 
 console.log(randomInt(10, 20));
 
 // Rounding integers
 console.log(Math.round(23.3));
 console.log(Math.round(23.9));
 
 console.log(Math.ceil(23.3));
 console.log(Math.ceil(23.0));
 
 console.log(Math.floor(23.3));
 console.log(Math.floor('23.9'));
 
 console.log(Math.trunc(23.3));
 
 console.log(Math.trunc(-23.3));
 console.log(Math.floor(-23.3));
 
 // Rounding decimals
 // toFixed returns a string
 console.log((2.7).toFixed(0));
 console.log((2.7).toFixed(3));
 console.log(+(2.345).toFixed(2));
 */
/*
 ///////////////////////////////////////////////
 // remainder operator
 console.log(5 % 2);
 console.log(5 / 2);
 
 console.log(8 % 3);
 console.log(8 / 3);
 
 const isEven = num => !(num % 2);
 console.log(isEven(8));
 console.log(isEven(23));
 
 labelBalance.addEventListener('click', () => {
 [...document.querySelectorAll('.movements__row')].forEach((row, i) => {
 if (i % 2 === 0) row.style.backgroundColor = 'orangered';
 if (i % 3 === 0) row.style.backgroundColor = 'blue';
 });
 });
 */
/*
 ///////////////////////////////////////////////
 // Numeric Separators
 const diameter = 287_460_000_000;
 console.log(diameter);
 
 const price = 345_99;
 console.log(price);
 
 const transferFee1 = 15_00;
 const transferFee2 = 1_500;
 
 const PI = 3.14_15;
 console.log(PI);
 
 console.log(Number('230_000')); // NaN
 */
/*
 ////////////////////////////////////////
 // bigInt
 console.log(2 ** 53 - 1);
 console.log(Number.MAX_SAFE_INTEGER);
 console.log(Number.MAX_VALUE);
 
 console.log(BigInt(483730242));
 
 // Operations
 console.log(10000n + 10000n);
 console.log(42354534523853409583405834n * 4534534n);
 
 const huge = 32342345534543543n;
 const num = 23;
 // console.log(huge * num);
 
 // Exceptions
 console.log(20n > 15);
 console.log(20n === 20);
 console.log(20n == 20);
 console.log(20n == '20');
 
 console.log(huge + ' is really big');
 
 // Divisions
 console.log(11n / 3n);
 console.log(10 / 3);
 */
/*
 /////////////////////////////////////////////
 // Creating dates
 // Create a date
 const now = new Date();
 console.log(now);
 
 console.log(new Date('Aug 02 2023 18:05:41'));
 console.log(new Date('December 24, 2015'));
 console.log(new Date(account1.movementsDates[0]));
 
 console.log(new Date(2036, 10, 19, 15, 23, 5));
 console.log(new Date(2036, 10, 33, 15, 23, 5));
 
 console.log(new Date(0));
 console.log(new Date(3 * 24 * 60 * 60 * 1000));
 
 // working with dates
 const future = new Date(2037, 10, 19, 15, 23);
 console.log(future);
 console.log(future.getFullYear());
 console.log(future.getMonth());
 console.log(future.getDate());
 console.log(future.getDay());
 console.log(future.getHours());
 console.log(future.getMinutes());
 console.log(future.getSeconds());
 console.log(future.toISOString());
 console.log(future.getTime());
 console.log(new Date(2142285780000));
 
 console.log(Date.now());
 
 future.setFullYear(2040);
 console.log(future);
 */

/*
 ////////////////////////////////////////////
 // creating date
 const future = new Date(2037, 10, 19, 15, 23);
 console.log(+future);
 const calcDaysPassed = (date1, date2) =>
 Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
 
 const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
 console.log(days1);
 */
/*
 ////////////////////////////////////////////
 // format numbers using Intl
 const num = 3884764.23;
 
 const option = {
 style: 'currency',
 unit: 'celsius',
 currency: 'EUR',
 // useGrouping: false,
 };
 
 console.log('US: ', new Intl.NumberFormat('en-US', option).format(num));
 console.log('Germany', new Intl.NumberFormat('de-DE', option).format(num));
 console.log('Syria', new Intl.NumberFormat('ar-SY', option).format(num));
 console.log(
 navigator.language,
 new Intl.NumberFormat(navigator.language, option).format(num),
 );
 */

/*
 //////////////////////////////////////
 // timers: setTimeout and setInterval
 // setTimeout
 const ingredients = ['olives', 'spinach'];
 const pizzaTimer = setTimeout(
 (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
 3000,
 ...ingredients,
 );
 console.log('Waiting...');
 
 if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);
 
 // setInterval
 setInterval(() => {
 const now = new Date();
 console.log(now);
 }, 3000);
 */
