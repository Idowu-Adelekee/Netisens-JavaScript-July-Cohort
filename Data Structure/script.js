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
