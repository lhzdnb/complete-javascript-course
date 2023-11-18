"use strict";
// =============== step 1: Selecting element ===============
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let currentEl = document.getElementById(`current--${activePlayer}`);
let currentPlayer = document.querySelector(`.player--${activePlayer}`);
let playing = true;

// =============== step 2: Starting conditions ===============
score0El.textContent = "0";
score1El.textContent = "0";
diceEl.classList.add("hidden");

// =============== step 3: Rolling dice functionality ===============
function switchPlayer() {
  currentScore = 0;
  currentEl.textContent = currentScore;

  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");

  activePlayer = activePlayer === 0 ? 1 : 0;

  currentEl = document.getElementById(`current--${activePlayer}`);
  currentPlayer = document.querySelector(`.player--${activePlayer}`);
}

btnRoll.addEventListener("click", () => {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1: if true, switch to the next player
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      currentEl.textContent = currentScore;
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", () => {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer].toString();
    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      playing = false;
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", () => {
  scores[0] = 0;
  scores[1] = 0;
  currentScore = 0;
  activePlayer = 0;
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
  currentEl = document.getElementById(`current--${activePlayer}`);
  currentPlayer = document.querySelector(`.player--${activePlayer}`);
  playing = true;
  score0El.textContent = "0";
  score1El.textContent = "0";
  document.getElementById(`current--0`).textContent = "0";
  document.getElementById(`current--1`).textContent = "0";
  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
});
