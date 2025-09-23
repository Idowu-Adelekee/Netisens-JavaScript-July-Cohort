"use strict";

// console.log("Log in ");

// // Selecting elements with tags name
// console.log(document.querySelector("h1"));

// const paragraphEl = document.querySelector("p");

// console.log(paragraphEl);

// // Selecting elements with class name

// console.log(document.querySelector(".heading-one"));

// const imageElQue = document.querySelector("#img-1");

// const imageEl = document.getElementById("img-1");

// console.log(imageElQue);
// console.log(imageEl);

// Selecting multiple items

// const images = document.querySelector(".img");

// console.log(images);

// const allImages = document.querySelectorAll(".img");
// console.log(allImages);

// const mainHeading = document.querySelector(".heading-one");

// mainHeading.textContent = "These are images elements";

// // images.src = "img/img-3.jpg";

// // console.log(images.src);

// console.log(mainHeading);

// const container = (document.querySelector(".container").innerHTML =
//   "Nothing is here");

// console.log(container.innerHTML);

// const obj = {
//   firstName: "Idowu",

//   helloMachine() {
//     return this.firstName;
//   },
// };

// console.log(obj.firstName);

// obj.firstName = "Michael";

// console.log(obj.firstName);

// const mainBody = document.querySelector("body");
// console.log(mainBody);

// mainBody.style.backgroundColor = "black";

// const helloMachine = function () {
//   console.log("Hello world");
// };

// setTimeout(helloMachine, 4000);

// console.log("Hi man");

let number = 0;
const changeImageFunc = function () {
  // Making the function recursive
  setTimeout(changeImageFunc, 3000);

  // Select all the images
  const allImages = document.querySelectorAll(".img");
  for (let i = 0; i <= allImages.length - 1; i++) {
    // Setting the display of all the images to none
    allImages[i].style.display = "none";
  }

  // Increasing the number by 1
  number++;
  if (number > allImages.length) {
    number = 1;
  }

  // Setting the display of the current image back to block
  allImages[number - 1].style.display = "block";

  console.log(number);
};

changeImageFunc();
