'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// old school

function renderCountry(data, className = '') {
  const html = `
  <article class="country ${className}">
  <img class="country__img" src="${data.flags.svg}" alt="${data.flags.alt}"/>
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)}M people</p>
    <p class="country__row"><span>🗣️</span>${Object.values(data.languages)}</p>
    <p class="country__row"><span>💰</span>${
      Object.values(data.currencies)[0].name
    }</p>
  </div>
  </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
}

function renderError(msg) {
  countriesContainer.insertAdjacentHTML('beforeend', msg);
}

/*
 const getCountryAndNeighbour = function (country) {
 // AJAX call country 1
 const request = new XMLHttpRequest();
 request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
 request.send();
 request.addEventListener('load', function () {
 const data = JSON.parse(this.responseText);
 data.forEach(country => {
 // Render country 1
 renderCountry(country);
 // Get neighbour country
 const [neighbour] = country.borders;
 if (!neighbour) return;
 
 // AJAX call country 2
 const request2 = new XMLHttpRequest();
 request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
 request2.send();
 request2.addEventListener('load', function () {
 const [data2] = JSON.parse(this.responseText);
 renderCountry(data2, 'neighbour');
 });
 });
 });
 };
 
 getCountryAndNeighbour('usa');
 
 const request = fetch('https://restcountries.com/v3.1/name/china');
 console.log(request);
 */

function getCountryData(country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) return;
      // Country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0], 'neighbour');
    })
    .catch(err =>
      renderError(`Something went wrong: ${err.message}. Try again.`),
    )
    .finally(() => (countriesContainer.style.opacity = '1'));
}

btn.addEventListener('click', () => {
  getCountryData('lhzdnb');
});
