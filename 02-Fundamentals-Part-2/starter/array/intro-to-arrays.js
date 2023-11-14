"use strict";
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

/*
 friends 是一个引用, 引用了 [friend1, friend2, friend3]内存块
 尽管 friends 是 const, 我们仍然能够通过friends来修改这个内存块中储存的数据
 但是我们无法更改friends到另一个内存块
 */

const friends = [friend1, friend2, friend3];

console.log(friends);

const years = new Array(1991, 1984, 2008);
console.log(years);

friends[2] = "Jay";
console.log(friends);

console.log(friend3);

const firstName = "Hao";
const lh = [firstName, "Liang", 2023 - 2002, "lhzdnb", friends];
console.log(lh.length);

const calcAge3 = (brithYear) => 2037 - brithYear;
const result = years.map((year) => calcAge3(year));
console.log(result);
