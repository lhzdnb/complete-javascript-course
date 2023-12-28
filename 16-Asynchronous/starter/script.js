// noinspection LanguageDetectionInspection

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

// btn.addEventListener('click', () => {
//   getCountryData('usa');
// });

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

/*
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
 */

/*
 navigator.geolocation.getCurrentPosition(
 position => {
 console.log(position);
 },
 err => {
 console.error(err.message);
 },
 );
 
 function getPosition() {
 return new Promise((resolve, reject) => {
 navigator.geolocation.getCurrentPosition(resolve, reject);
 });
 }
 
 getPosition()
 .then(res => console.log(res))
 .catch(err => console.error(err.message));
 
 function whereAmI(lat, lng) {
 fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
 .then(response => {
 if (!response.ok)
 throw new Error(`Problem with geocoding ${response.status}`);
 return response.json();
 })
 .then(data => {
 const { city, country } = data;
 if (city === 'Throttled! See geocode.xyz/pricing')
 throw new Error(
 'You can send at most 1 requests per second. Try again later!',
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
 
 btn.addEventListener('click', () => {
 getPosition().then(position =>
 whereAmI(position.coords.latitude, position.coords.longitude),
 );
 });
 */

//////////////////////////////////////
// Coding challenge # 2
/*
 function createImage(imgPath) {
 return new Promise((resolve, reject) => {
 const img = document.createElement('img');
 img.src = imgPath;
 
 img.addEventListener('load', () => {
 document.querySelector('.images').append(img);
 resolve(img);
 });
 
 img.addEventListener('error', () =>
 reject(new Error('Failed to load image at path ' + imgPath)),
 );
 });
 }
 
 function wait(seconds) {
 return new Promise(resolve => {
 setTimeout(() => resolve(`Wait for ${seconds} seconds!`), seconds * 1000);
 });
 }
 
 let currentImg;
 
 // 使用 createImage 函数加载第一张图片，该函数返回一个 Promise 对象
 createImage('./img/img-1.jpg')
 // 当第一张图片加载完成后，将其赋值给 currentImg，并在控制台打印消息
 .then(img => {
 currentImg = img;
 console.log('First img loaded');
 // 返回一个新的 Promise 对象，该对象在 2 秒后解析。这提供了一个延时效果。
 return new Promise(resolve => setTimeout(resolve, 2000));
 })
 // 当上述 Promise 对象解析后，将 currentImg 的 display 属性设置为 'none'，即隐藏该图片
 // 然后加载第二张图片
 .then(() => {
 currentImg.style.display = 'none';
 return createImage('./img/img-2.jpg');
 })
 // 当第二张图片加载完成后，将其赋值给 currentImg，并在控制台打印消息
 .then(img => {
 currentImg = img;
 console.log('Second img loaded');
 // 返回一个新的 Promise 对象，该对象在 2 秒后解析。这提供了一个延时效果。
 return new Promise(resolve => setTimeout(resolve, 2000));
 })
 // 当上述 Promise 对象解析后，将 currentImg 的 display 属性设置为 'none'，即隐藏该图片
 // 然后加载第三张图片
 .then(() => {
 currentImg.style.display = 'none';
 return createImage('./img/img-3.jpg');
 })
 // 当第三张图片加载完成后，将其赋值给 currentImg，并在控制台打印消息
 .then(img => {
 currentImg = img;
 console.log('Third img loaded');
 // 返回一个新的 Promise 对象，该对象在 2 秒后解析。这提供了一个延时效果。
 return new Promise(resolve => setTimeout(resolve, 2000));
 })
 // 当上述 Promise 对象解析后，将 currentImg 的 display 属性设置为 'none'，即隐藏该图片
 .then(res => (currentImg.style.display = 'none'));
 */

/////////////////////////////////////////
// returning values from async functions
/*
 function getPosition() {
 return new Promise((resolve, reject) => {
 navigator.geolocation.getCurrentPosition(resolve, reject);
 });
 }
 
 async function whereAmI(country) {
 try {
 // Geolocation
 const pos = await getPosition();
 const { latitude: lat, longitude: lng } = pos.coords;
 
 // Reverse geocoding
 const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
 if (!resGeo.ok) throw new Error('Problem getting country');
 const dataGeo = await resGeo.json();
 // Country data
 const res = await fetch(
 `https://restcountries.com/v3.1/name/${dataGeo.country}`,
 );
 if (!res.ok) throw new Error('Problem getting country');
 
 const [data] = await res.json();
 renderCountry(data);
 countriesContainer.style.opacity = '1';
 
 return `You are in ${dataGeo.city}, ${dataGeo.country}`;
 } catch (err) {
 console.error(err);
 renderError(`${err.message}.`);
 
 // Reject promise returned from async function
 throw err;
 }
 }
 
 console.log('1: Will get location');
 // // const city = whereAmI();
 // // console.log(city);
 // whereAmI()
 //   .then(city => console.log(city))
 //   .catch(err => console.error(`2: ${err.message}`))
 //   .finally(() => {
 //     console.log('3. Finished getting location');
 //   });
 
 (async function () {
 try {
 const res = await whereAmI();
 console.log('2: ' + res);
 } catch (err) {
 console.error('2: ' + err.message);
 }
 console.log('3: Finished getting location');
 })();
 
 // try {
 //   let y = 1;
 //   const x = 2;
 //   x = 3;
 // } catch (err) {
 //   alert(err.message);
 // }
 */
/*
 ///////////////////////////////////////////////
 // running promises in parallel
 async function get3Countries(c1, c2, c3) {
 try {
 // const [data1] = await
 // getJSON(`https://restcountries.com/v3.1/name/${c1}`); const [data2] =
 // await getJSON(`https://restcountries.com/v3.1/name/${c2}`); const
 // [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
 
 const data = await Promise.all([
 getJSON(`https://restcountries.com/v3.1/name/${c1}`),
 getJSON(`https://restcountries.com/v3.1/name/${c2}`),
 getJSON(`https://restcountries.com/v3.1/name/${c3}`),
 ]);
 console.log(data.map(country => country[0].capital));
 } catch (err) {
 console.error(err);
 }
 }
 
 get3Countries('usa', 'canada', 'tanzania');
 */

/*
 ///////////////////////////////////////////
 // Other Promise Combinators: race, allSettled and any
 // promise.race
 (async function () {
 const res = await Promise.race([
 getJSON(`https://restcountries.com/v3.1/name/italy`),
 getJSON(`https://restcountries.com/v3.1/name/egypt`),
 getJSON(`https://restcountries.com/v3.1/name/mexico`),
 ]);
 console.log(res[0]);
 })();
 
 function timeout(sec) {
 return new Promise(function (_, reject) {
 setTimeout(() => {
 reject(new Error(`Request took too long`));
 }, 0.1 * 1000);
 });
 }
 
 Promise.race([
 getJSON(`https://restcountries.com/v3.1/name/tanzania`),
 timeout(1),
 ])
 .then(res => console.log(res[0]))
 .catch(err => console.error(err));
 
 // Promise.allSettled
 Promise.allSettled([
 Promise.resolve('Success'),
 Promise.reject('ERROR'),
 Promise.resolve('Another success'),
 ]).then(res => console.log(res));
 
 Promise.all([
 Promise.resolve('Success'),
 Promise.reject('ERROR'),
 Promise.resolve('Another success'),
 ])
 .then(res => console.log(res))
 .catch(err => console.error(err));
 
 // Promise.any
 Promise.any([
 Promise.resolve('Success'),
 Promise.reject('ERROR'),
 Promise.resolve('Another success'),
 ]).then(res => console.log(res));
 Promise.any([
 Promise.reject('Success'),
 Promise.reject('ERROR'),
 Promise.reject('Another success'),
 ])
 .then(res => console.log(res))
 .catch(err => console.error(err.message));
 */

function createImage(imgPath) {
  return new Promise((resolve, reject) => {
    const imgElement = document.createElement('img');
    imgElement.src = imgPath;
    const imgContainer = document.querySelector('.images');

    imgElement.addEventListener('load', () => {
      imgContainer.append(imgElement);
      resolve(imgElement);
    });

    imgElement.addEventListener('error', () => {
      reject(`Failed to load the image at: ${imgPath}.`);
    });
  });
}

function wait(sec) {
  return new Promise(resolve => {
    setTimeout(resolve, 1000 * sec);
  });
}

async function loadPause(count) {
  try {
    let currentImg;
    for (let i = 1; i <= count; i++) {
      currentImg = await createImage(`./img/img-${i}.jpg`);
      console.log(`Image ${i} loaded`);
      await wait(2);
      currentImg.style.display = 'none';
    }
    return 'All images have been loaded without error!';
  } catch (err) {
    throw err;
  }
}

// loadPause(3).then(res => console.log(res));

async function loadAll(imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    console.log(imgs);
    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error(err);
  }
}

const allImgs = [];
for (let i = 0; i < 3; i++) {
  allImgs.push(`./img/img-${i + 1}.jpg`);
}
loadAll(allImgs);
