// What does the following code return/print?

// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;

// console.log(numPlanets); // ?
// console.log(yearNeptuneDiscovered); // ?

//Answer

// This would return 8 planets as
// This would return 1846

// What does the following code return/print?

let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659,
};

let { numPlanets, ...discoveryYears } = planetFacts;

console.log(discoveryYears); // ?

// Answer

// This would return {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

// What does the following code return/print?

function getUserData({ firstName, favoriteColor = "green" }) {
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({ firstName: "Alejandro", favoriteColor: "purple" }); // ?
getUserData({ firstName: "Melissa" }); // ?
getUserData({}); // ?

//Answer

// Your name is Alejandro and you like purple ;
// Your name is Melissa and you like green ;
// Your name is undefined and you like green ;

let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // ?
console.log(second); // ?
console.log(third); // ?

//Answer

// Maya
// Marisa
// Chi

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  "Raindrops on roses",
  "whiskers on kittens",
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings",
];

console.log(raindrops); // ?
console.log(whiskers); // ?
console.log(aFewOfMyFavoriteThings); // ?

// Answer

// Raindrops on roses
// whiskers on kittens
//  ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]

let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]];

console.log(numbers); // ?

// Answer

// [ 10 , 30 , 20 ]

// var obj = {
//   numbers: {
//     a: 1,
//     b: 2,
//   },
// };

// var a = obj.numbers.a;
// var b = obj.numbers.b;

// Answer

const obj = {
  numbers: {
    a: 1,
    b: 2,
  },
};

const { a, b } = obj.numbers;

// var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

let arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]];

// Write a function called raceResults which accepts a single array argument. It should return an object with the keys first, second, third, and rest.

// first: the first element in the array
// second: the second element in the array
// third: the third element in the array
// rest: all other elements in the array
// Write a one line function to make this work using
// An arrow function
// Destructuring
// ‘Enhanced’ object assignment (same key/value shortcut)
// raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])

// /*
//   {
//     first: "Tom",
//     second: "Margaret",
//     third: "Allison",
//     rest: ["David", "Pierre"]
//   }
// */

const raceResults = ["Tom", "Margaret", "Allison", "David", "Pierre"];

function awardMedals([gold, silver, bronze, ...losers]) {
  return {
    gold,
    silver,
    bronze,
    losers,
  };
}

// You can also use a one line function of

const raceResultsShort = ([first, second, third, ...rest]) => ({
  first,
  second,
  third,
  rest,
});
