'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////////////////////
// button scrolling
btnScrollTo.addEventListener('click', e => {
  section1.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////////////
// page navigation
// document.querySelectorAll('.nav__link').forEach(element => {
//   element.addEventListener('click', e => {
//     e.preventDefault();
//     const id = e.target.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// 1. add event listener to common parent element
// 2. determine what element originated the event
document.querySelector('.nav__links').addEventListener('click', e => {
  console.log(e.target);
  // matching strategy
  if (e.target.classList.contains('nav__link')) {
    e.preventDefault();
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

///////////////////////////////////////////////
///////////////////////////////////////////////
/*
 console.log(document.documentElement);
 console.log(document.head);
 console.log(document.body);
 const header = document.querySelector('.header');
 const allSections = document.querySelectorAll('.section');
 console.log(allSections);
 
 document.getElementById('section--1');
 const allButtons = document.getElementsByTagName('button');
 console.log(allButtons);
 
 console.log(document.getElementsByClassName('btn'));
 
 // Creating and inserting elements
 // .insertAdjacentHTML
 const message = document.createElement('div');
 message.classList.add('cookie-message');
 message.textContent =
 'We use cookies for improved functionality and analytics.';
 message.innerHTML = `We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie"> Got it! </button>`;
 
 // header.prepend(message);
 header.append(message);
 // header.append(message.cloneNode(true));
 // header.before(message);
 // header.after(message);
 
 // Delete elements
 document
 .querySelector('.btn--close-cookie')
 .addEventListener('click', () => message.remove());
 // message.parentElement.removeChild(message)
 */

/*
 // styles
 message.style.backgroundColor = '#37383d';
 message.style.widows = '120%';
 
 console.log(message.style.color);
 console.log(message.style.backgroundColor);
 console.log(getComputedStyle(message).color);
 console.log(getComputedStyle(message).height);
 
 message.style.height =
 Number.parseFloat(getComputedStyle(message).height) + 40 + 'px';
 
 document.documentElement.style.setProperty('--color-primary', 'orangered');
 
 // Attributes
 const logo = document.querySelector('.nav__logo');
 console.log(logo.alt);
 console.log(logo.src);
 console.log(logo.className);
 
 logo.alt = 'Beautiful minimalist logo';
 
 // Non-standard
 console.log(logo.designer);
 console.log(logo.getAttribute('designer'));
 logo.setAttribute('company', 'Bankist');
 
 console.log(logo.src);
 console.log(logo.getAttribute('src'));
 
 const link = document.querySelector('.nav__link--btn');
 
 console.log(link.href);
 console.log(link.getAttribute('href'));
 
 // Data attributes
 console.log(logo.dataset.versionNumber);
 */
/*
 // Classes
 logo.classList.add('c', 'j');
 logo.classList.remove('c', 'j');
 logo.classList.toggle('c');
 logo.classList.contains('c');
 
 // Don't use
 // logo.className = 'jonas'; // remove all other classes
 */

/*
 const btnScrollTo = document.querySelector('.btn--scroll-to');
 const section1 = document.querySelector('#section--1');
 
 btnScrollTo.addEventListener('click', e => {
 const s1coords = section1.getBoundingClientRect();
 console.log(s1coords);
 
 console.log(e.target.getBoundingClientRect());
 console.log('Current scroll (X/Y)', window.scrollX, scrollX);
 
 console.log(
 'height/width viewport',
 document.documentElement.clientHeight,
 document.documentElement.clientWidth,
 );
 // scrolling
 
 // Scroll to the absolute position of an element on the page.
 // The absolute position is calculated by adding the current scroll position
 // of the page (window.scrollX, window.scrollY) to the relative position of
 // the element within the viewport (s1coords.left, s1coords.top). The
 // scrolling behavior is set to 'smooth'.
 
 // window.scrollTo({
 //   left: s1coords.left + window.scrollX,
 //   top: s1coords.top + window.scrollY,
 //   behavior: 'smooth',
 // });
 
 // modern way
 section1.scrollIntoView({ behavior: 'smooth' });
 });
 
 const h1 = document.querySelector('h1');
 const alertH1 = e => {
 alert('addEventListener: Great! You are reading the heading :D');
 };
 h1.addEventListener('mouseenter', alertH1);
 
 setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
 // h1.onmouseenter = e =>
 //   alert('addEventListener: Great! You are reading the heading :D');
 */
/*
 
 ////////////////////////////////////////////////////
 // Event propagation in practice
 const randomInt = (min, max) =>
 Math.floor(Math.random() * (max - min + 1) + min);
 const randomColor = () =>
 `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
 console.log(randomColor());
 
 // if we click on the nav__link, the nav__links and the nav also get the
 // background color because of event propagation
 document.querySelector('.nav__link').addEventListener('click', function (e) {
 this.style.backgroundColor = randomColor();
 console.log('LINK', e.target, e.currentTarget);
 console.log(e.currentTarget === this);
 // Stop propagation
 // e.stopPropagation();
 });
 document.querySelector('.nav__links').addEventListener('click', function (e) {
 this.style.backgroundColor = randomColor();
 });
 
 /!*
 The 'true' argument at the end signifies that this event listener is set to capture the event during the capturing phase, not the bubbling phase.
 *!/
 document.querySelector('.nav').addEventListener(
 'click',
 function (e) {
 this.style.backgroundColor = randomColor();
 },
 // true,
 );
 */
