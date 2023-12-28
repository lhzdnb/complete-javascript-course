console.log("Exporting module");

// Blocking code
// console.log("Start fetching users");
// const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//
// console.log("Finish fetching users");

const shippingCost = 10;
export const cart = [];

export function addToCart(product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to the cart`);
}

const totalPrice = 237;
const totalQuantity = 23;

export { totalQuantity as tq, totalPrice };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to the cart`);
}
