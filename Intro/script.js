"use strict";
// const const = ''

// Data Types
// There are two main data types in JavaScript
// 1. Object or (reference types)
// 2. Primitive types

// const { useEffect } = require("react");

//. 1.Object or reference types
// i. Functions
// ii. Arrays
// iii. map
// iv. set
// v. object

// 2. PRIMITIVE DATA TYPES
// i. Strings
// ii. Number
// iii. Boolean

// __________________
// iv. Null
// v. Undefined
// vi. Symbol
// vii. BigInt

// Examples of String

/*

console.log("My name Idowu");
console.log("Your name 390");

// console.log(whoareyou);

console.log(230, 320, 800, 20.4, 20 + 20);
console.log(true, false);

console.log(null);

console.log(undefined);

// Variables
const hisFirstName = "Wisdom";
// hisFirstName = "Victory";

let herFirstName = "Teresa";
console.log(herFirstName);
herFirstName = "Gracefundzz";
console.log(herFirstName);

// ____________________
var itsName = "Cat";

console.log("His name is", hisFirstName);
console.log("His name is", hisFirstName);
console.log("His name is", hisFirstName);
console.log("His name is", herFirstName);
console.log("Its name is", itsName);

const myAge = 23;
const my_Age = 23;
const female = true;
console.log(myAge);
console.log(female);

let job1 = "Designer";
let job2 = "Developer";

let formalJob = "Designer";
let currentJob = "Developer";

const Person = "Dangote";

// const class = "Otedola";
// const 3mtt = 'tech';
// console.log(3mtt);

// Recommendations for naming variables
// 1. Variable name should be in camelCase
// 2. Variable name should be descriptive
// 3. Don't start variable with uppercase

// Hard rules
// 1. Don't begin a variable name with number;
// 2. Variable names can only contain letters, numbers, underscore and dollar sign
// 3. Error may occur if you use JavaScript reserved words such "name", "function", "new" "class" etc

// 2nd Class
// OPERATORS AND EXPRESSIONS
// Types of Operator
// a. Mathematical operator
// b. Assignment operator
// c. Comparison Operator
// d. Typeof operator
// e. Eqaulity Operators
// f. Logical operator


// A. MATHEMATICAL OPERATOR

// const xx = 33;
// let yy = "Netisens";
// const zz = {};
// const aa = true;
// console.log(xx);
// console.log(typeof xx, typeof yy, typeof zz, typeof aa);

// i. Addition operator
const addition = 20 + 40;
const subtraction = 40 - 10;
const mutilplication = 2 * 40;
const division = 40 / 2;
const power = 2 ** 3;

const combination = 20 + 40 - 10 / 2;

// String concatenation
const firstName = "Wisdom";
const lastName = "Daniel";

// Type Coercion
console.log(firstName + " " + lastName + 44);

console.log(
  addition,
  subtraction,
  mutilplication,
  division,
  power,
  combination
);

//2. Assignment operator
const myName = "Idowu";
let wisdom = 29;

// wisdom++; // wisdom = wisdom + 1;
// wisdom++;
// wisdom++;
// wisdom--;

// wisdom = wisdom + 3;

wisdom += 3;

console.log(wisdom, typeof wisdom);


// 3. Comparison Operators


const legalAge = 18;

const ageFavour = 19;
// console.log(ageFavour >= 18);

// 5. Eqaulity Operators
console.log(ageFavour == 18);

const myAge = "27";

// Loose eqaulity operator
console.log(myAge == 27);

// Strict equality operator
console.log(myAge === 27);

const courseRepName = "Owen Fundzz";
const state = "Akwa Ibom";
const age = 25;
const course = "Computer Science";

console.log(
  "My name is" +
    " " +
    courseRepName +
    "," +
    "I'm from" +
    state +
    "," +
    "I study" +
    course +
    "and" +
    "I'm" +
    age +
    "years old."
);

// Template literal or Template string
console.log(
  `My name is ${courseRepName}, I'm from ${state}, I study ${course} and I'm ${age} years old`
);



// 1. Introduce yourself with in a template literal stating clearly your {firstName}, {lastName}, {course of study}, {future ambition}, {marital status}, {gender} and {favourite quote};

// ____________________

// 1. Conditional (if else statement and ternary operator)

// 2. Type Conversion and type coercion
// 3. Truthy and false values

// 4. Boolean logic and logical operator

// ________________________
const ageGrace = 19;
const legalAge = 18;

if (true) {
  console.log("Grace can go for driver's license");
} else {
  console.log(
    `Grace cannot go for driver's license now, she need to wait for ${
      legalAge - ageGrace
    } more years`
  );
}
// if (ageGrace >= legalAge) {
//   console.log("Grace can go for driver's license");
// } else {
//   console.log(
//     `Grace cannot go for driver's license now, she need to wait for ${
//       legalAge - ageGrace
//     } more years`
//   );
// }

// const userAge = prompt("What's your age");
// console.log(userAge);
// console.error(23);

// Type Coercion
console.log("23" + 23);
console.log("40" - 10);
console.log("Grace" * 40);
console.log(typeof NaN);
console.log(23 + 23);

// Typer Conversion
const newYear = 2026;
console.log(String(newYear));
console.log(newYear);

const bigStringNumber = String(2839823270327037208);
console.log(bigStringNumber);

const bigString = Number("3829832037203");
console.log(bigString);

// console.log("Obong's friend");

// Boolean logic
const Boo = Boolean(1);
const lean = Boolean("Netisens");
console.log(Boo, lean);

// Falsy values
// 1. 0
// 2. null
// 3. undefined;
// 4. '';
// 5. NaN;

const zero = Boolean(0);
const nullify = Boolean(null);
const noMeaning = Boolean(undefined);
const empty = Boolean("");
const noNumber = Boolean(NaN);

console.log(zero, nullify, noMeaning, empty, noNumber);

if ((3 && null && 0) || (false && "Netisens")) {
  console.log("Grace can cook");
} else {
  console.log("Grace cannot cook");
}

// THE AND LOGICAL OPERATOR
// True AND true AND TRUE=== true
// True AND false === false
// False AND true === false
// False AND false ==== false

// THE OR LOGICAL OPERATOR
// True OR true === true
// True OR false === true
// False OR true ==== true
// false OR false ==== false

// Not true === false
// Not False === true.

console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false

console.log(true || true); // true
console.log(true || false); // true
console.log(false || false); // false

console.log(!true); // false
console.log(!false); // true

// console.log("You are beautiful today");
// alert("You are beautiful today");
// const userFeedback = prompt("May I know your name");
// console.log(userFeedback);

const userAge = Number(prompt("How old are you"));
// const userAge = 25;
console.log(userAge);

if (userAge === 25) {
  console.log("You must be a graduate");
} else if (userAge === 26) {
  console.log("You must be be working");
} else if (userAge === 27) {
  console.log("You must be engaged");
} else if (userAge === 28) {
  console.log("You must be married");
} else if (userAge === 29) {
  console.log("You must have had a kid");
} else {
  console.log("You must be 30 and above");
}

if (userAge !== 25) {
  console.log("You must be 26 or above");
}


console.log("Hello");

// ________________________
// TERNARY (Conditional) OPERATOR;

const ageGrace = 16;

// if else statement
if (ageGrace >= 18) {
  console.log("Grace can drive");
} else {
  const ageLeft = 18 - ageGrace;
  console.log(
    `Grace cannot drive now. She has to wait for ${ageLeft} more years`
  );
}

// Ternary operator
const drive =
  ageGrace >= 18
    ? console.log("Grace can drive")
    : console.log(`Grace cannot drive now`);

// 3+4;
// 'Netisens';
// 3 >= 4;
// 50 + 28 + 2802 + 3;

const graceBirthyear = 2003;
console.log(`Grace is ${2025 - graceBirthyear} years old`);

console.log(`Grace ${ageGrace >= 18 ? "can drive" : "cannot drive"}`);

const canDrive = `Grace ${ageGrace >= 18 ? "can drive" : "cannot drive"}`;


console.log(canDrive);

*/

// const cyril = "coke";
// const michael = "Pepsi";

// const cokeOrPepsi = cyril === "coke" ? "Cyril like coke" : "Micheal like Pepsi";

// console.log(cokeOrPepsi);

// console.log("Weight lifting repetition 1");
// console.log("Weight lifting repetition 2");
// console.log("Weight lifting repetition 3");
// console.log("Weight lifting repetition 4");
// console.log("Weight lifting repetition 5");
// console.log("Weight lifting repetition 6");
// console.log("Weight lifting repetition 7");
// console.log("Weight lifting repetition 8");
// console.log("Weight lifting repetition 9");
// console.log("Weight lifting repetition 10");

// The for loop

// for loop keep running while the condition stay true.
// for (let rep = 1; rep <= 10; rep++) {
//   if (rep === 7) break;
//   console.log(`Weight lifting repetition ${rep}`);
// }

// f(x)  = q

// Function Declaration
// function caclAge(currentYear, birthYear, firstName) {
//   const age = currentYear - birthYear;
//   console.log(age);

//   return `${firstName} is ${age} years old`;
// }

// Calling/Running/Invoking a function;
// const ageMichael = caclAge(2025, 1997, "Michael");

// const ageWisdom = caclAge(2025, 1994, "Wisdom");
// const ageEdet = caclAge(2025, 2010, "Edet");

// console.log(ageMichael);
// console.log(ageWisdom);
// console.log(ageEdet);

// Function Expresssion

// Arros Function/

/*
Assignment
 1. Create a loop that loop backward from 30 to 1;

// 2. Write a condition that check if a person can drink wine if he's older that 18. If no he can only drink water. 
Use:
1. Ternary operator
2. if else statement

3. Create a introMachine function, inside the function create 3 parameters firstName, age and course. Call the function with the respective values of your firstName, age and course.

Then return the value of `My name is ${firstName}, a ${age} years old and I studied ${course}`
*/

// function introMachine(firstName, age, course) {
//   return `My name is ${firstName}, a ${age} years old man and I studied ${course}.`;
// }

// const aboutMe = introMachine("Idowu", 27, "Banking and Finance");

// console.log(aboutMe);

// FUNCTIONS
// calcAge1();
// function calcAge1(birthYear) {
//   console.log("thi is function declaration");

// }

const school = "Netisens";

if (school === "Netisens") {
  console.log("I like tech");
} else {
  console.log("I don't like tech");
}

for (let i = 30; i >= 1; i--) {
  console.log(`Counting down from ${i}`);
}

const calcAge = function (birthYear, firstName) {
  return `${firstName} is a man of ${2025 - birthYear} years old`;
};

const cyril = calcAge(2000, "Cyril");
console.log(cyril);

// Arrow function
const calcAgeArr = (birthYear, firstName) => {
  const niceVar = "I'm a nice guy";

  return `${firstName} is a man of ${2025 - birthYear} years old`;
  console.log(niceVar);
};

const aniekpeno = calcAgeArr(2002, "Aniekpeno");

console.log(aniekpeno);

// calcAge();
// calcAge();

// console.log()

console.log("_____________Function Calling other Function________");

// Function calling other functions

const cutFruitPieces = (fruit) => {
  return fruit * 4;
};

const juiceProcessor = function (orange, mango) {
  const orangePieces = cutFruitPieces(orange);
  const mangoPieces = cutFruitPieces(mango);

  const juice = `Juice with ${orangePieces} pieces of orange and ${mangoPieces} pieces of mango`;
  return juice;
};

const fruitJuice = juiceProcessor(4, 2);
console.log(fruitJuice);

const age = 2025;
console.log(2002 - age);

//
const calcAge2 = function (birthYear) {
  const newAge = 2025 - birthYear;
  return newAge;
};

const age2 = calcAge2(1998);
console.log(age2);

// 1. Global Scope
// 2. Function Scope
// 3. Block Scope

// if (3) {
//   const tech = "Money";
// }
// console.log(tech);

// const simpleFunc = (birthYear) => {
//   var grandma = "Sweet food";
// };

// console.log(grandma);
const friend1 = "Aniekpeno";
const friend2 = "Josiah";
const friend3 = "Theresa";

// Using Array
const friends = ["Aniekpeno", "Josiah", "Theresa"];

console.log(friends);

console.log(friends.length);

const aboutPeterArr = [
  "Peter",
  "John",
  27,
  true,
  ["Ruth", "Caleb", "Rose"],
  "Akwa Ibom",
  "male",
];

console.log(aboutPeterArr);

const aboutPeterObj = {
  firstName: "Peter",
  lastName: "John",
  age: 27,
  hasDriverLicense: true,
  friends: ["Ruth", "Caleb", "Rose"],
  state: "Akwa Ibom",
  gender: "Male",

  calcAge(birthYear) {
    const currentAge = 2025 - birthYear;
    return currentAge;
  },
};

console.log(aboutPeterObj);

// Getting value out of an object
console.log(aboutPeterObj.friends[1]);
console.log(aboutPeterObj["friends"][1]);

const age = aboutPeterObj.calcAge(1998);
console.log(age);

// This function caclAge
const calcAge = function (birthYear) {
  const currentAge = 2025 - birthYear;
  return currentAge;
};

const ageMichael = calcAge(2000);
console.log(ageMichael);

//  1, Create an object that has properties of firstName, age, and course.
// 2. Create a introMachine method, inside the method use the properties of the object to introduce yourself, and then return the value and call the method outside the object. Then log in to the console.

// const number = [15, 14, ..]

// 3. Create an number array from 15 to 1, the loop over the array to print a countdown from 1 to 15;
