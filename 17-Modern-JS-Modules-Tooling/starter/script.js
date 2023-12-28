// Exporting module
// import { addToCart, totalPrice as price, tq } from "./shoppingCart.js";

// addToCart("bread", 5);
// console.log(tq, price);

console.log("Importing module");

// import * as ShoppingCart from "./shoppingCart.js";
// import add from "./shoppingCart.js";
//
// ShoppingCart.addToCart("bread", 5);
// console.log(ShoppingCart.totalPrice);

import add, { cart } from "./shoppingCart.js";

add("pizza", 2);
add("bread", 5);
add("apples", 4);

console.log(cart);

// console.log("Start fetching");
// const res = await fetch("https://jsonplaceholder.typicode.com/posts");
// const data = await res.json();
// console.log(data);
//
// console.log("Something");

async function getLastPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body }; // always returns
  // a Promise
}

// not very clean
// const lastPost = getLastPost();
// lastPost.then((last) => {
//   console.log(last);
// });

const lastPost = await getLastPost();
console.log(lastPost);
