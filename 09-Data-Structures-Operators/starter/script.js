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
};

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

/* const { name, openingHours, categories } = restaurant;
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
