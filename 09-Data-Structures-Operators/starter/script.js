"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.starterMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(starterIndex, mainIndex, time, address);
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
 //////////////////////////////////
 // Working with Strings - Part 1
 const airline = "TAP Air Portugal";
 const plane = "A320";
 console.log(plane[0]);
 console.log(plane[1]);
 console.log(plane[2]);
 console.log("B737"[0]);
 console.log(airline.length);
 
 console.log(airline.indexOf("r"));
 console.log(airline.lastIndexOf("r"));
 console.log(airline.indexOf("portugal")); // -1
 console.log(airline.indexOf("Portugal")); // 8
 // Substring
 console.log(airline.slice(4)); // Air Portugal
 console.log(airline.slice(4, 7)); // Air
 
 console.log(airline.slice(0, airline.indexOf(" ")));
 console.log(airline.slice(airline.lastIndexOf(" ") + 1));
 
 console.log(airline.slice(-2));
 console.log(airline.slice(1, -1));
 
 const checkMiddleSeat = function (seat) {
 // B and E are middle seats
 const s = seat.slice(-1);
 if (s === "B" || s === "E") console.log("You got the middle seat");
 else console.log("You got lucky");
 };
 
 checkMiddleSeat("11B");
 checkMiddleSeat("23C");
 checkMiddleSeat("3E");
 
 console.log(new String("lhzdnb"));
 console.log(typeof new String("lhzdnb"));
 console.log(typeof new String("lhzdnb").slice(1)); */

///////////////////////////////////////
// Coding Challenge #3

/*
 Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
 
 1. Create an array 'events' of the different game events that happened (no duplicates)
 2. After the game has finished, it was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
 [FIRST HALF] 17: ⚽️ GOAL
 
 GOOD LUCK 😀
 */
/*
 const gameEvents = new Map([
 [17, "⚽️ GOAL"],
 [36, "🔁 Substitution"],
 [47, "⚽️ GOAL"],
 [61, "🔁 Substitution"],
 [64, "🔶 Yellow card"],
 [69, "🔴 Red card"],
 [70, "🔁 Substitution"],
 [72, "🔁 Substitution"],
 [76, "⚽️ GOAL"],
 [80, "⚽️ GOAL"],
 [92, "🔶 Yellow card"],
 ]);
 
 // 1
 const events = new Set(gameEvents.values());
 
 // 2
 gameEvents.delete(64);
 console.log(gameEvents);
 
 // 3. Print the following string to the console: "An event happened, on
 // average, every 9 minutes" (keep in mind that a game has 90 minutes)
 
 console.log(
 `An event happened, on average, every ${90 / gameEvents.size} minutes`,
 );
 
 //  4. Loop over the events and log them to the console, marking whether it's
 // in the first half or second half (after 45 min) of the game, like this:
 // [FIRST HALF] 17: ⚽️ GOAL
 
 for (const [time, event] of gameEvents) {
 console.log(
 `${time <= 45 ? "[FIRST HALF]" : "[SECOND HALF]"} ${time}: ${event}`,
 );
 } */

/*
 ///////////////////////////////////////
 // 
 
 const question = new Map([
 ["question", "What is the best programming language in the world?"],
 [1, "C"],
 [2, "Java"],
 [3, "JavaScript"],
 ["correct", 3],
 [true, "Correct 🎉"],
 [false, "Try again!"],
 ]);
 console.log(question);
 
 // Convert object to map
 console.log(Object.entries(openingHours));
 const hoursMap = new Map(Object.entries(openingHours));
 console.log(hoursMap);
 
 for (const [key, value] of question) {
 if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
 }
 
 // const answer = Number(prompt("Your answer"));
 // console.log(question.get(answer === question.get("correct")));
 
 // Convert map to array
 console.log(...question);
 console.log(question.entries());
 console.log([...question.keys()]);
 console.log([...question.values()]);
 console.log(question.get("question")); */

/*
 ///////////////////////////////////////
 // Maps: Fundamentals
 const rest = new Map();
 rest.set("name", "Classico Italiano");
 rest.set(1, "Firenze, Italy");
 console.log(rest.set(2, "Lisbon, Portugal"));
 rest
 .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
 .set("open", 11)
 .set("close", 23)
 .set(true, "We are open")
 .set(false, "We are closed");
 console.log(rest);
 console.log(rest.get("name"));
 console.log(rest.get(true));
 
 const time = 21;
 rest.get(time > rest.get("open") && time < rest.get("close"));
 
 console.log(rest.has("categories"));
 rest.delete(2);
 console.log(rest);
 console.log(rest.size);
 // rest.clear();
 
 rest.set([1, 2], "Test");
 console.log(rest);
 
 console.log(rest.get([1, 2])); // undefined because [1, 2] is not the same
 // object as the key [1, 2]
 
 const arr = [1, 2];
 rest.set(arr, "Test");
 console.log(rest.get(arr)); // Test because arr is the same object as the key
 
 rest.set(document.querySelector("h1"), "Heading");
 console.log(rest.get(document.querySelector("h1")));
 
 
 
 ////////////////////////////////////////
 // Sets
 const orderSet = new Set([
 "Pasta",
 "Pizza",
 "Pizza",
 "Risotto",
 "Pasta",
 "Pizza",
 ]);
 console.log(orderSet);
 console.log(new Set("lhzdnb"));
 console.log(orderSet.size);
 
 console.log(orderSet.has("Bread"));
 console.log(orderSet.has("Pizza"));
 orderSet.add("Garlic Bread");
 orderSet.add("Garlic Bread");
 console.log(orderSet);
 orderSet.delete("Risotto");
 // orderSet.clear();
 console.log(orderSet);
 
 for (const order of orderSet) {
 console.log(order);
 }
 
 // Example
 const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
 const staffUnique = [...new Set(staff)];
 console.log(staffUnique);
 
 
 ///////////////////////////////////////
 // Coding Challenge #2
 
 /*
 Let's continue with our football betting app!
 
 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
 Odd of victory Bayern Munich: 1.33
 Odd of draw: 3.25
 Odd of victory Borrussia Dortmund: 6.5
 Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
 
 BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
 {
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
 }
 
 GOOD LUCK 😀
 */
/*
 const game = {
 team1: "Bayern Munich",
 team2: "Borrussia Dortmund",
 players: [
 [
 "Neuer",
 "Pavard",
 "Martinez",
 "Alaba",
 "Davies",
 "Kimmich",
 "Goretzka",
 "Coman",
 "Muller",
 "Gnarby",
 "Lewandowski",
 ],
 [
 "Burki",
 "Schulz",
 "Hummels",
 "Akanji",
 "Hakimi",
 "Weigl",
 "Witsel",
 "Hazard",
 "Brandt",
 "Sancho",
 "Gotze",
 ],
 ],
 score: "4:0",
 scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
 date: "Nov 9th, 2037",
 odds: {
 team1: 1.33,
 x: 3.25,
 team2: 6.5,
 },
 };
 
 // 1.Loop over the game.scored array and print each player name to the console,
 // along with the goal number (Example: "Goal 1: Lewandowski")
 
 for (const [key, value] of game.scored.entries()) {
 console.log(`Goal ${key + 1}: ${value}`);
 }
 
 // 2. Use a loop to calculate the average odd and log it to the console (We
 // already studied how to calculate averages, you can go check if you don't
 // remember)
 let average = 0;
 for (const value of Object.values(game.odds)) {
 average += value;
 }
 average /= Object.keys(game.odds).length;
 console.log(average);
 
 /*
 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
 Odd of victory Bayern Munich: 1.33
 Odd of draw: 3.25
 Odd of victory Borrussia Dortmund: 6.5
 Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
 */
/*
 for (const [name, odd] of Object.entries(game.odds)) {
 const teamName = game[name] ?? "draw";
 console.log(`Odd of ${teamName}: ${odd}`);
 }
 
 // BONUS: Create an object called 'scorers' which contains the names of the
 // players who scored as properties, and the number of goals as the value. In
 // this game, it will look like this: { Gnarby: 1, Hummels: 1, Lewandowski: 2 }
 
 const scorers = {};
 for (const name of game.scored) {
 scorers[name] = scorers[name] + 1 || 1;
 }
 console.log(scorers);
 
 //////////////////////////////////////////////////
 // Looping Objects
 // Property names
 const properties = Object.keys(openingHours);
 console.log(properties);
 let openStr = `We are open on ${properties.length} days: `;
 
 for (const day of properties) {
 openStr += `${day}, `;
 }
 console.log(openStr);
 
 // Property values
 const values = Object.values(openingHours);
 console.log(values);
 
 const entries = Object.entries(openingHours);
 for (const [day, { open, close }] of entries) {
 console.log(`On ${day}, we open at ${open} and close at ${close}.`);
 }
 
 //////////////////////////////////////////////
 // Optional Chaining
 // if (restaurant.openingHours.mon.open) {
 //   console.log(restaurant.openingHours.mon.open);
 // }
 // With optional chaining
 console.log(restaurant.openingHours.mon?.open);
 console.log(restaurant.openingHours?.mon?.open);
 // Example
 const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
 for (const day of days) {
 const open = restaurant.openingHours[day]?.open ?? `closed`;
 console.log(`On ${day}, we open at ${open}`);
 }
 
 // Methods
 console.log(restaurant.order?.(0, 1) ?? "Method does not exit");
 console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exit");
 
 // Arrays
 const users = [{ name: "Jonus", email: "hello@jonas.io" }];
 console.log(users[0]?.name ?? "User array empty");
 
 ///////////////////////////////
 // for of loop
 const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
 for (const item of menu) {
 console.log(item);
 }
 
 for (const item of menu.entries()) {
 console.log(item);
 }
 
 for (const [index, element] of menu.entries()) {
 console.log(`${index}: ${element}`);
 }
 
 //////////////////////////////////
 // Assignment Operator
 const rest1 = {
 name: "Capri",
 // numGuests: 20,
 numGuests: 0,
 };
 const rest2 = {
 name: "La Piazza",
 owner: "Giovanni Rossi",
 };
 
 // rest1.numberGuests = rest1.numGuests || 10;
 // rest2.numberGuests = rest2.numGuests || 10;
 
 // nullish assignment operator (null or undefined)
 rest1.numGuests ??= 10;
 // OR assignment operator
 rest2.numberGuests ||= 10;
 // AND assignment operator
 rest1.owner &&= "<ANONYMOUS>";
 rest2.owner &&= "<ANONYMOUS>";
 
 console.log(rest1);
 console.log(rest2);
 
 
 ///////////////////////////////////////////////
 The Nullish Coalescing Operator
 restaurant.numGuests = 0;
 const guest = restaurant.numGuests || 10;
 console.log(guest);
 
 // Nullish: null and undefined (NOT 0 or '')
 const guestCorrect = restaurant.numGuests ?? 10;
 console.log(guestCorrect);
 
 
 //////////////////////////////////////////////
 // Short Circuiting
 // Use ANY data type, return ANY data type, short-circuiting
 console.log('--------- OR --------');
 console.log(3 || 'lhzdnb');
 console.log('' || 'lhzdnb');
 console.log(true || 0);
 console.log(undefined || null);
 console.log(undefined || 0 || '' || 'Hello' || 23 || null);
 
 // restaurant.numGuests = 23;
 const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
 console.log(guest1);
 
 const guest2 = restaurant.numGuests || 10;
 console.log(guest2);
 
 console.log('-------- AND -------');
 console.log(0 && 'lhzdnb');
 
 
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
 console.log(p, q, r);*/
