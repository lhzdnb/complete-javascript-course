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

import add, {cart} from './shoppingCart.js';
/*
 //////////////////////////////////////////
 // The module pattern
 const ShoppingCart2 = (function () {
 const cart = [];
 const shippingCost = 10;
 const totalPrice = 237;
 const totalQuantity = 23;
 
 function addToCart(product, quantity) {
 cart.push({ product, quantity });
 console.log(
 `${quantity} ${product} added to cart. Shipping cost is ${shippingCost}`,
 );
 }
 
 function orderStock(product, quantity) {
 console.log(`${quantity} ${product} ordered from supplier`);
 }
 
 return {
 addToCart,
 cart,
 totalPrice,
 totalQuantity,
 };
 })();
 
 ShoppingCart2.addToCart("apple", 4);
 ShoppingCart2.addToCart("pizza", 2);
 console.log(ShoppingCart2);
 console.log(ShoppingCart2.shippingCost);
 */
import cloneDeep from 'lodash-es';
import 'core-js/stable';
import 'core-js/stable/array/find';
//////////////////////////////
// CommonJS modules
// Export
/*
 export.addToCart = function(product, quantity) {
 cart.push({ product, quantity });
 console.log(
 `${quantity} ${product} added to cart. Shipping cost is ${shippingCost}`,
 );
 }
 
 // Import
 const {addToCart} = require('./shoppingCart.js');
 */

// import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";

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
/*
 
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
 */

const state = {
  cart: [
    { product: "bread", quantity: 5 },
    { product: "pizza", quantity: 2 },
  ],
  user: { loggedIn: true },
};

// const stateClone = Object.assign({}, state);
// state.user.loggedIn = false;
// console.log(stateClone);

const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

class Person {
  #greeting = "Hey";

  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}

const lh = new Person("lhzdnb");
console.log(lh);

console.log(cart.find((el) => el.quantity >= 2));
Promise.resolve("TEST").then((x) => console.log(x));
