"use strict";

console.log("check in");

const countryContainer = document.querySelector(".countries");

// https://restcountries.com/v2/name/${country}

const displayError = function (err) {
  countryContainer.insertAdjacentText(
    "afterbegin",
    `${err.message} Something went wrong`
  );
};

const displayCountry = function (data, neighbourClass) {
  console.log(data);
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

// Comment start here
// const getCountry = function (country) {
//   const request = fetch(`https://restcountries.com/v2/name/${country}`)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data[0]);

//       displayCountry(data[0]);
//     })
//     .catch((error) => {
//       displayError(error);
//     });
// };

// getCountry("nigeria");
// End of comment

// getCountry("usa");
// getCountry("ghana");
// getCountry("portugal");

/// Checking the country borders

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

getCountry("usa");
