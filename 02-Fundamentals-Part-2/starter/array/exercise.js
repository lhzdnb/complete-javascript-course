// import bookmarksView from "../../../18-forkify/final/src/js/views/bookmarksView.js";

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

/* Write your code below. Good luck! 🙂 */
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = bills.map((bill) => {
  return calcTip(bill);
});
const totals = bills.map((bill, index) => {
  return bill + tips[index];
});

function calcAverage(arr) {
  return (
    arr.reduce((previous, value) => {
      previous += value;
      return previous;
    }, 0) / arr.length
  );
}

console.log(calcAverage(totals));

let total = 0;
for (let i = 0; i < totals.length; i++) {
  total += totals[i];
}

console.log(total / totals.length);
