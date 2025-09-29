"use strict";

document.querySelector(".close-modal").addEventListener("click", function () {
  console.log("You clicked me");
});

const overlayEl = document.querySelector(".overlay");

console.log(overlayEl);

overlayEl.addEventListener("click", function (firstName) {
  prompt("Read the overlay");
  console.log(firstName);
});

// Calling a function
/// abc("Michael")

// WORKING ON THE MODAL POP UP

// Select elements
// const openModal = document.querySelectorAll(".show-modal");
const openModal = document.querySelector(".show-modal");
const modal = document.querySelector(".modal");
console.log(modal);
const overlay = document.querySelector(".overlay");

console.log(openModal);

// openModal.addEventListener("click", function () {
//   console.log("You click a button");
// });

// for (let i = 0; i <= openModal.length - 1; i++) {
//   openModal[i].addEventListener("click", function () {
//     modal.classList.remove("hidden");
//   });
// }

// console.log(openModal);

openModal.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

const closeButton = document.querySelector(".close-modal");
closeButton.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

/// Keyboard event

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});
v;
