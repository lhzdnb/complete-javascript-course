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
    '2020-07-12T10:51:36.790Z',
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

function displayMovements(movements, sort = false) {
  containerMovements.innerHTML = '';

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

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}

function calcDisplayBalance(account) {
  const balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  account.balance = balance;
  labelBalance.textContent = `${balance} €`;
}

function calcDisplaySummary(account) {
  const incomes = account.movements
    .filter(movement => movement > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outs = account.movements
    .filter(movement => movement < 0)
    .reduce((acc, mov) => acc - mov, 0);
  labelSumOut.textContent = `${outs}€`;

  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter(interest => {
      return interest >= 1;
    })
    .reduce((acc, interest) => acc + interest, 0);

  labelSumInterest.textContent = `${interest}€`;
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
  displayMovements(currentAccount.movements);
  // Display balance
  calcDisplayBalance(currentAccount);
  // Display summary
  calcDisplaySummary(currentAccount);
}

createUsernames(accounts);
// Event handler
let currentAccount;
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
    receiverAccount.movements.push(amount);

    // update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', e => {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= 0.1 * amount)) {
    // add the movement
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
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
    console.log(index);
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
  displayMovements(currentAccount.movements, !isSorted);
  isSorted = !isSorted;
});

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
