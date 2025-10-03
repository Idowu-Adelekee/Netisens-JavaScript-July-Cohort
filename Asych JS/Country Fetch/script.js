"use strict";
const countryContainer = document.querySelector(".countries");

// https://restcountries.com/v2/name/${country}

const displayError = function (err) {
  countryContainer.insertAdjacentText(
    "afterbegin",
    `${err.message} Something went wrong`
  );
};

const displayCountry = function (data, neighbourClass) {
  const countryhtml = ` 
  <article class="country ${neighbourClass}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              data.population / 1000000
            ).toFixed(1)}m people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].code
            }</p>
          </div>
        </article>`;

  countryContainer.insertAdjacentHTML("afterbegin", countryhtml);
};

// const getCountry = function (country) {
//   const request = fetch(`https://restcountries.com/v2/name/${country}`)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data[0]);

//       displayCountry(data[0]);
//     })
//     .catch((error) => {
//       displayError(error);
//     })
//     .finally(() => {
//       countryContainer.style.opacity = 1;
//     });
// };

// getCountry("nigeria");
// End of comment

// getCountry("usa");
// getCountry("ghana");
// getCountry("portugal");

// // / Checking the country borders

// const getCountry = function (country) {
//   const request = fetch(`https://restcountries.com/v2/name/${country}`)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data[0]);

//       displayCountry(data[0]);
//       const neighbour = data[0].borders[0];

//       console.log(neighbour);

//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then((respnse) => respnse.json())
//     .then((data) => {
//       displayCountry(data, "neighbour");
//     })
//     .catch((error) => {
//       displayError(error);
//     });
// };

// getCountry("usa");

// Consuming Promises with Async functions

const getCountry = async function (country) {
  try {
    const request = await fetch(`https://restcountries.com/v2/name/${country}`);

    const data = await request.json();
    displayCountry(data[0]);

    // Getting neighbouring country

    const neighbour = data[0].borders[0];

    const neighbourRequest = await fetch(
      `https://restcountries.com/v2/alpha/${neighbour}`
    );
    const neighbourData = await neighbourRequest.json();
    displayCountry(neighbourData, "neighbour");
  } catch (err) {
    // alert(`Something went wrong, wrong name ${err.message}`);
    displayError(err);
  }
};

// getCountry("nigeria");
getCountry("usa");
// getCountry("usa");
// console.log("Hello");

// const getUsersData = async function (user) {
//   const request = await fetch(`https://dummyjson.com/users`);

//   const response = await request.json();
//   console.log(response);
// };

// getUsersData();

// try {
//   let age = 30;
//   const name = "Wisdom";
//   name = 31;
// } catch (error) {
//   alert(error.message);
// }

// Assignment, fetch data from dummy Jhttps://dummyjson.com/, using then method and using async function. Replace the fetch data with your html content.
