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

/* function getJSON(url, errorMsg = 'Something went wrong') {
 fetch(url).then(response => {
 if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
 return response.json();
 });
 }
 
 function getCountryData(country) {
 fetch(`https://restcountries.com/v3.1/name/${country}`)
 .then(response => {
 console.log(response);
 if (!response.ok)
 throw new Error(`Country: ${country} not found (${response.status})`);
 return response.json();
 })
 .then(data => {
 renderCountry(data[0]);
 const neighbour = data[0].borders[0];
 if (!neighbour) return;
 // Country 2
 return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
 })
 .then(response => {
 if (!response.ok)
 throw new Error(`Country: ${country} not found (${response.status})`);
 return response.json();
 })
 .then(data => {
 renderCountry(data[0], 'neighbour');
 })
 .catch(err =>
 renderError(`Something went wrong: ${err.message}. Try again.`),
 )
 .finally(() => (countriesContainer.style.opacity = '1'));
 } */

function getJSON(url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
}

function getCountryData(country) {
  getJSON(
    `https://restcountries.com/v3.1/name/${country}`,
    `Country: ${country} not found.`,
  )
    .then(data => {
      console.log(data);
      renderCountry(data[0]);
      // Country 2
      if (!data[0]?.borders) throw new Error('No neighbour found!');
      const neighbour = data[0]?.borders[0];

      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        `Country: ${country} not found.`,
      );
    })
    .then(data => {
      renderCountry(data[0], 'neighbour');
    })
    .catch(err =>
      renderError(`Something went wrong: ${err.message}. Try again.`),
    )
    .finally(() => (countriesContainer.style.opacity = '1'));
}

btn.addEventListener('click', () => {
  getCountryData('usa');
});

//////////////////////////////////////////////////
// Coding Challenge #1
/*
 function whereAmI(lat, lng) {
 fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
 .then(response => {
 if (!response.ok)
 throw new Error(`Problem with geocoding ${response.status}`);
 return response.json();
 })
 .then(data => {
 console.log(data);
 const { city, country } = data;
 if (city === 'Throttled! See geocode.xyz/pricing')
 throw new Error(
 'You can send at most 3 requests per second. Try again later!',
 );
 console.log(`You are in ${city}, ${country}`);
 return fetch(`https://restcountries.com/v3.1/name/${country}`);
 })
 .then(response => {
 if (!response.ok)
 throw new Error(`Country not found (${response.status}`);
 return response.json();
 })
 .then(data => renderCountry(data[0]))
 .catch(err => {
 console.error(`Something went wrong: ${err.message}.`);
 })
 .finally(() => (countriesContainer.style.opacity = '1'));
 }
 
 const coords = [
 [52.508, 13.381],
 [19.037, 72.873],
 [-33.933, 18.474],
 ];
 
 if (navigator.geolocation) {
 navigator.geolocation.getCurrentPosition(
 position => {
 console.log(position);
 whereAmI(position.coords.latitude, position.coords.longitude);
 },
 () => {
 alert('Could not get your location');
 },
 );
 }
 setTimeout(() => whereAmI(...coords[0]), 1500);
 setTimeout(() => whereAmI(...coords[1]), 3000);
 setTimeout(() => whereAmI(...coords[2]), 4500);
 */

/*
 console.log('Test start');
 setTimeout(() => console.log('0 sec timer'), 0);
 Promise.resolve('Resolved promise 1').then(res => console.log(res));
 Promise.resolve('Resolved promise 2').then(res => {
 for (let i = 0; i < 1000000000; i++) {}
 console.log(res);
 });
 console.log('Test end');
 */

// Test start
// Test end
// resolved promise 1
// 0 sec timer

const lotteryPromise = new Promise((resolve, reject) => {
  console.log('Lottery draw is happening');
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('You win');
    } else {
      reject(new Error('You lose'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout
function wait(seconds) {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
}

wait(2)
  .then(() => {
    console.log('1 sec');
    return wait(1);
  })
  .then(() => {
    console.log('2 sec');
    return wait(1);
  })
  .then(() => {
    console.log('3 sec');
    return wait(1);
  })
  .then(() => {
    console.log('4 sec');
    return wait(1);
  });

Promise.resolve('abc').then(x => console.log(x));
Promise.reject('abc').catch(err => console.error(err));
