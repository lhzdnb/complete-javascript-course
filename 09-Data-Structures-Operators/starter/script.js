'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.starterMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(starterIndex, mainIndex, time, address);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`,
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/*
 ////////////////////////////////////////
 SPREAD Operator
 // 1) Destructuring
 
 // SPREAD, because on the RIGHT side of =
 const arr = [1, 2, ...[3, 4]];
 
 // REST, because on the LEFT side of =
 const [a, b, ...others] = [1, 2, 3, 4, 5];
 console.log(a, b, others);
 
 const [pizza, , risotto, ...otherFood] = [
 ...restaurant.mainMenu,
 ...restaurant.starterMenu,
 ];
 console.log(pizza, risotto, otherFood);
 
 // Objects
 const { sat, ...weekdays } = restaurant.openingHours;
 console.log(weekdays);
 
 // 2) Functions
 const add = function (...numbers) {
 let sum = 0;
 for (let i = 0; i < numbers.length; i++) {
 sum += numbers[i];
 }
 console.log(sum);
 };
 add(2, 3);
 add(5, 3, 7, 2);
 add(8, 2, 5, 3, 2, 1, 4);
 
 const x = [23, 5, 7];
 add(...x);
 
 restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
 restaurant.orderPizza('mushrooms');
 
 
 /////////////////////////////////////////
 // The Spread Operator (...)
 // spread operator does not create new variables, so it can only be used in places where we would otherwise write
 // values separated by commas. spread 运算符不会创建新变量，因此它只能用于我们编写以逗号分隔的值的地方。
 // Only use it when creating a new array or pass parameters to a function
 const arr = [7, 8, 9];
 const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
 console.log(badNewArr);
 
 const newArr = [1, 2, ...arr];
 console.log(newArr);
 
 console.log(...newArr);
 
 const newMenu = [...restaurant.mainMenu, 'Gnocci'];
 console.log(newMenu);
 
 // copy array
 const mainMenuCopy = [...restaurant.mainMenu];
 
 // join 2 arrays
 const menu = [...restaurant.starterMenu, ...mainMenuCopy];
 console.log(menu);
 
 // Iterables: arrays, strings, maps, sets. Not objects
 const str = 'lhzdnb';
 const letters = [...str, ' ', 'lh'];
 console.log(letters);
 console.log(...str);
 
 // const ingredients = [
 //   prompt(`Let's make pasta! Ingredient 1?`),
 //   prompt(`Ingredient 2?`),
 //   prompt(`Ingredient 3?`),
 // ];
 // console.log(ingredients);
 
 // restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
 // restaurant.orderPasta(...ingredients);
 
 // Objects
 const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
 console.log(newRestaurant);
 
 // Shallow Copy
 const restaurantCopy = { ...restaurant };
 restaurantCopy.name = 'Ristorante Roma';
 console.log(restaurantCopy.name);
 console.log(restaurant.name);
 
 
 ///////////////////////////////////////////////
 // Destructuring Objects
 restaurant.orderDelivery({
 time: '22:30',
 address: 'via del sole, 21',
 mainIndex: 2,
 starterIndex: 2,
 });
 
 // Default values
 const { menu = [], starterMenu: starters = [] } = restaurant;
 console.log(menu, starters);
 
 // Mutating variables
 let a = 111;
 let b = 999;
 const obj = { a: 23, b: 7, c: 14 };
 
 ({ a, b } = obj);
 console.log(a, b);
 
 // nested objects
 const {
 fri: { open: o, close: c },
 } = restaurant.openingHours;
 console.log(o, c);
 
 const { name, openingHours, categories } = restaurant;
 console.log(name, openingHours, categories);
 
 // Give new name to variables
 const {
 name: restaurantName,
 openingHours: hours,
 categories: tags,
 } = restaurant;
 console.log(restaurantName, hours, tags);
 
 
 const arr = [2, 3, 4];
 const a = arr[0];
 const b = arr[1];
 const c = arr[2];
 
 // Destructing
 const [x, y, z] = arr;
 console.log(x, y, z);
 console.log(arr);
 
 let [main, , secondary] = restaurant.categories;
 console.log(main, secondary);
 
 const temp = main;
 main = secondary;
 secondary = temp;
 console.log(main, secondary);
 
 [secondary, main] = [main, secondary];
 console.log(main, secondary);
 
 const [starter, mainCourse] = restaurant.order(2, 0);
 console.log(starter, mainCourse);
 
 // Nested destructing
 const nested = [2, 4, [5, 6]];
 // const [i, , j] = nested;
 // console.log(i, j);
 const [i, , [j, k]] = nested;
 console.log(i, j, k);
 
 // Default values
 const [p = 1, q = 1, r = 1] = [8, 9];
 console.log(p, q, r); */
