"use strict";

const checkBtn = document.querySelector(".check");
const message = document.querySelector(".message");
const number = document.querySelector(".number");
const scoreSpan = document.querySelector(".score");
const high = document.querySelector(".high-score");
const againBtn = document.querySelector(".again");
const guess = document.querySelector(".guess");

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;
checkBtn.addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  // when there is no guess
  if (!guess) {
    message.textContent = "⛔ No Number";

    // when wins
  } else if (guess === secretNumber) {
    number.textContent = secretNumber.toString();
    message.textContent = "🎉 Correct Number!";
    document.body.style.backgroundColor = "#60b347";
    number.style.width = "30rem";
    highScore = highScore > score ? highScore : score;
    high.textContent = highScore;

    // when too high
  } else if (guess > secretNumber) {
    message.textContent = "Too high!";
    score--;
    scoreSpan.textContent = score.toString();

    // when too low
  } else {
    message.textContent = "Too low!";
    score--;
    scoreSpan.textContent = score.toString();
  }

  // when lose
  if (score <= 0) {
    message.textContent = "You lose!";
  }
});

againBtn.addEventListener("click", () => {
  scoreSpan.textContent = "20";
  high.textContent = "0";
  message.textContent = "Start guessing";
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  number.textContent = "?";
  document.body.style.backgroundColor = "#222";
  guess.value = "";
});
