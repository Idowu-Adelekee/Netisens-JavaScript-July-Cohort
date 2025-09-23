"use strict";

const friend1 = "Aniekpeno";
const friend2 = "Josiah";
const friend3 = "Theresa";

// Using Array
// const friends = ["Aniekpeno", "Josiah", "Theresa"];

// console.log(friends);

// console.log(friends.length);

// const aboutPeter = [
//   "Peter",
//   "John",
//   27,
//   true,
//   ["Ruth", "Caleb", "Rose"],
//   "Akwa Ibom",
//   "male",
// ];

// console.log(aboutPeter);

// // const peterFirstname = aboutPeter[0];
// // console.log(peterFirstname);
// // console.log(aboutPeter[0]);
// // console.log(aboutPeter[4][1]);

// // console.log(aboutPeter.length);

// console.log("_________Loop starts here______");
// for (let i = 0; i <= aboutPeter.length - 1; i++) {
//   console.log(aboutPeter[i]);
// }

// const nigerianUniversities = ["Uniabuja", "Uniben", "Uniuyo"];

// // Basic Array Methods
// // Adding element to an array
// // 1. Push
// // 2. Unshift
// // Removing element in an array
// // 3. Pop
// // 4. Shift
// // 5. Splice
// // Getting element of an array
// // 6. at
// // Other methods
// // 7. includes

// // Adding to the end of an array
// console.log(nigerianUniversities);
// console.log(nigerianUniversities.length);

// const newLength = nigerianUniversities.push("Unical", "Unilag", "OAU");
// console.log(newLength);

// console.log(nigerianUniversities);

// // Adding to the begining of array
// nigerianUniversities.unshift("BUK", "UI");

// console.log(nigerianUniversities);

// const removeEl = nigerianUniversities.pop();
// console.log(removeEl);

// nigerianUniversities.shift();
// console.log(nigerianUniversities);

// // nigerianUniversities.splice(2, 3);

// console.log(nigerianUniversities[0]);

// console.log(nigerianUniversities.at(0));

// console.log(nigerianUniversities.includes("Uniabuja"));
// console.log(nigerianUniversities.includes("Uniport"));

// const aboutPeterArr = [
//   "Peter",
//   "John",
//   27,
//   true,
//   ["Ruth", "Caleb", "Rose"],
//   "Akwa Ibom",
//   "male",
// ];

// console.log(aboutPeterArr);

// const aboutPeterObj = {
//   firstName: "Peter",
//   lastName: "John",
//   age: 27,
//   hasDriverLicense: true,
//   friends: ["Ruth", "Caleb", "Rose"],
//   state: "Akwa Ibom",
//   gender: "Male",

//   calcAge(birthYear) {
//     const currentAge = 2025 - birthYear;
//     return currentAge;
//   },
// };

// console.log(aboutPeterObj);

// // Getting value out of an object
// console.log(aboutPeterObj.friends[1]);
// console.log(aboutPeterObj["friends"][1]);

// const age = aboutPeterObj.calcAge(1998);
// console.log(age);

// // This function caclAge
// const calcAge = function (birthYear) {
//   const currentAge = 2025 - birthYear;
//   return currentAge;
// };

// const ageMichael = calcAge(2000);
// console.log(ageMichael);

//  1, Create an object that has properties of firstName, age, and course.
// 2. Create a introMachine method, inside the method use the properties of the object to introduce yourself, and then return the value and call the method outside the object. Then log in to the console.

// const number = [15, 14, ..]

// 3. Create a number array from 15 to 1, the loop over the array to print a countdown from 1 to 15;

// const emmaObject = {
//   firstName: "Emmanuel",
//   lastName: "Anthony",
//   age: 19,
//   course: "Engineering",

//   calcAge(birthYear) {
//     return 2025 - birthYear;
//   },

// introMachine() {
//   return `My name is ${this.firstName}, I studied ${emmaObject.course} and I'm ${emmaObject.age} years old`;
// },

// introMachine() {
//   return `My name is ${emmaObject.firstName}, I studied ${emmaObject.course} and I'm ${emmaObject.age} years old`;
// },
// };

// The this keyword is equal to the object calling the function.

// console.log(emmaObject.introMachine());

// const number = [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1];

// for (let i = number.length - 1; i >= 0; i--) {
//   console.log(number[i]);
// }

// console.log(number);

const emmaObject = {
  firstName: "Emmanuel",
  lastName: "Anthony",
  birthYear: 2005,
  course: "Engineering",

  calcAge() {
    console.log(this);

    const hiMachine = () => {
      console.log("Hi Netisens");
      console.log(this);
    };

    hiMachine();
    return 2025 - this.birthYear;
  },
};

// This keyword rule 1.
// The this keyword inside of a method is equal to the object calling the method.
console.log(emmaObject.calcAge());

// This keyword rule 2
// The this keyword inside of a regular function is set to to undefined, that is if the function is function expression or function declaration
const helloMachine = function () {
  console.log(`Hello world`);
  console.log(this);
};

helloMachine();

// This keyword rule 2
// This keyword inside a global scope is equal to window global object.
console.log(this);
// console.log();

///
const hiMachine = () => {
  console.log("Hi Netisens");
  console.log(this);
};

hiMachine();

// const joshuaObject = {
//   firstName: "Joshua",
//   lastName: "Junior",
//   birthYear: 1999,
//   course: "Computer Science",
// };

// joshuaObject.computeAge = emmaObject.calcAge;

// The this keyword inside of a method.
// The this keyword is equal to the object calling the function.
// console.log(emmaObject.calcAge());
// console.log(joshuaObject.computeAge());

// The this keyword inside of a regular function

// const helloPrint = function () {
//   console.log(this);
// };

// helloPrint();

// The rules of this keyword
// Rule 1.
// The this keyword inside of a method is equal to the object calling the method.

// Rule 2
// This keyword inside a global scope is equal to window global object.

// Rule 3
// This keyword inside of a regular function is alway undefined if the function is function expression or declaration

// Rule 4
// This keyword inside of an arrow function alway point to the parent this of that arrow function

// Rule 5.
// Incase of event listener, the this keyword always point to the element which the handler function is attached to.

// const aboutObj = function () {
//   return `${this.firstName} is a ${2025 - this.birthYear} years old ${
//     this.job
//   } and he has ${this.driverLicense ? "a" : "no"} driver's license`;
// };

const idowu = {
  firstName: "Idowu",
  birthYear: 1998,
  job: "Corp member",
  driverLicense: false,

  introduce() {
    return `${this.firstName} is a ${2025 - this.birthYear} years old ${
      this.job
    } and he has ${this.driverLicense ? "a" : "no"} driver's license`;
  },
};

const michael = {
  firstName: "Michael",
  birthYear: 2000,
  job: "Student",
  driverLicense: false,
};

const yusuf = {
  firstName: "Yusuf",
  birthYear: 1995,
  job: "Teacher",
  driverLicense: true,
};

// idowu.introduce = aboutObj;
michael.introduce = idowu.introduce;
yusuf.introduce = idowu.introduce;

// console.log(idowu.introduce());
console.log(michael.introduce());
console.log(yusuf.introduce());

// Idowu is a 27 year old corp member and he has a or no driver's license

// Create an object and attached a method that calculate your age, the make the method return `firstname is number year old and ;he has a driver license`

//1. Create a restaurant object that has properties of ibibioSoup, hausaSoup, yorubaSoup, and igboSoup, swallow property that has garri, semovita, pounded yam and fufu

// 2. Inside the restaurant object, create an orderIbibioMeal method that orders meal and return the string. Order received, Afang and fufu will be delivered to Netisens ICT, no.133 Atiku Abubakar way.
