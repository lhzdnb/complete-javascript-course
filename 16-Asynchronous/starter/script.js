'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// old school
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
    const data = JSON.parse(this.responseText);
    data.forEach(country => {
      const html = `
  <article class="country">
    <img class="country__img" src="${country.flags.svg}" alt="${
      country.flags.alt
    }"/>
  <div class="country__data">
  <h3 class="country__name">${country.name.common}</h3>
  <h4 class="country__region">${country.region}</h4>
  <p class="country__row"><span>👫</span>${(
    +country.population / 1000000
  ).toFixed(1)}M people</p>
  <p class="country__row"><span>🗣️</span>${
    Object.values(country.languages)[0]
  }</p>
  <p class="country__row"><span>💰</span>${
    Object.values(country.currencies)[0].name
  }</p>
  </div>
  </article>
  `;

      countriesContainer.insertAdjacentHTML('beforeend', html);
      countriesContainer.style.opacity = '1';
    });
  });
};

getCountryData('portugal');
getCountryData('usa');
getCountryData('germany');
