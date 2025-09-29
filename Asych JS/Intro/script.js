"use scrict";

"use strict";

// const btn = document.querySelector(".btn-country");
// const countriesContainer = document.querySelector(".countries");

// https://dummyjson.com/quotes
// https://restcountries.com/v2/name/${country}/

// Some Definition
// The main purpose of async is to make ajax call to api
// Async js and xml: Allows us to communicate with remote web servers in an asynchronous way. With AJAX calls, we can request data from web servers dynamically

// API: is piece of software that can be used by another piece of software, order to allow applications to talk to each other. e.g dom api, geolocation api

// A promise is an object that is used as a placeholder for the future result of an asynchronous operation.

// Life cycle of a promise
// 1. Pending
// 2. Settle a.fulfiled or rejected

//  Less formal, a promise is a container for a future value.

// Asynchoronous JS introduction
// const p = document.querySelector('.p');

// setTimeout(function() {
//   p.textContent = 'My name is Idowu';
// }, 5000);
// p.style.color = yellow

// const img = document.querySelector(".img");
// img.src = "dog.jpg";

// img.addEventListener("load", function () {
//   img.classList.add("fadeIn");
// });

// Details on how request work
// Request respone model or client-server architecture

// const request = fetch(`https://restcountries.com/v2/name/${country}/`);
// console.log(request);

// const getCountryData = function(country) {
//   request = fetch(`https://restcountries.com/v2/name/${country}/`).then(response) {

//   }
// }

// getCountryData('nigeria');

// https://dummyjson.com/quotes

// const request = fetch(`https://dummyjson.com/quotes`)
//   .then(function (respone) {
//     console.log(respone);
//     return respone.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });

// console.log(request);

// const request = fetch("https://dummyjson.com/quotes")
//   .then(function (response) {
//     console.log(response);
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });

// console.log(request);

console.log("checkin");

const y = 23;
const name = "Idowu";
const allNames = function () {
  "";
};
allNames();

const driverLicense = true;
console.log(y);
// alert(44);
console.log(name);

setTimeout(function () {
  console.log(4);
}, 5000);

console.log(driverLicense);

// Using promise

const request = fetch("https://dummyjson.com/products")
  .then(function (response) {
    // console.log(response);
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

console.log("Hello Netisens");
// https://restcountries.com/v2/name/nigeria/

// const getCountryData = function (country) {
//   const getCountry = fetch(`https://restcountries.com/v2/name/${country}/`)
//     .then(function (rep) {
//       return rep.json();
//     })
//     .then(function (detail) {
//       console.log(detail);
//     });
// };

const getCountryData = function (country) {
  const getCountry = fetch(`https://restcountries.com/v2/name/${country}/`)
    .then((rep) => rep.json())
    .then((detail) => console.log(detail));
};

getCountryData("nigeria");
getCountryData("usa");
getCountryData("italy");
