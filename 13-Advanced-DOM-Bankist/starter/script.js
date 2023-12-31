'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
// tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
const imgTargets = document.querySelectorAll('img[data-src]');
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');

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
btnScrollTo.addEventListener('click', () => {
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

// tabbed component
tabsContainer.addEventListener('click', e => {
  const clicked = e.target.closest('.operations__tab');
  if (!clicked) return; // guard clause
  // active tab
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');
  // activate content area
  tabsContent.forEach(content =>
    content.classList.remove('operations__content--active'),
  );
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// menu fade animation
function handleHover(event, opacity) {
  if (event.target.classList.contains('nav__link')) {
    const link = event.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(element => {
      if (element !== link) {
        element.style.opacity = opacity;
      }
    });
    logo.style.opacity = opacity;
  }
}

// passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind('0.5'));
nav.addEventListener('mouseout', handleHover.bind('1'));

// sticky navigation
// const s1coords = section1.getBoundingClientRect();
// window.addEventListener('scroll', e => {
//   if (window.scrollY > s1coords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });
// function obsCallback(entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// }
//
// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

function stickyNav(entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
}

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: '-90px',
});
headerObserver.observe(header);

// reveal sections
function revealSection(entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// lazy loading images
function loadImg(entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  // replace src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
}

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

// Slider
function slider() {
  let curSlide = 0;

  function goToSlide(slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`),
    );
  }

  function creatDots() {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`,
      );
    });
  }

  function activateDot(slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  }

  creatDots();
  activateDot(0);
  goToSlide(0);

  function nextSlide() {
    curSlide++;
    if (curSlide >= slides.length) curSlide = 0;
    goToSlide(curSlide);
    activateDot(curSlide);
  }

  function previousSlide() {
    curSlide--;
    if (curSlide === -1) curSlide = slides.length - 1;
    goToSlide(curSlide);
    activateDot(curSlide);
  }

  // next slide
  btnRight.addEventListener('click', nextSlide);
  // previous slide
  btnLeft.addEventListener('click', previousSlide);

  document.addEventListener('keydown', e => {
    if (e.code === 'ArrowRight') nextSlide();
    else if (e.code === 'ArrowLeft') previousSlide();
  });

  dotContainer.addEventListener('click', e => {
    if (e.target.classList.contains('dots__dot')) {
      curSlide = e.target.dataset.slide;
      goToSlide(curSlide);
      activateDot(curSlide);
    }
  });
}

slider();

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
/*
 // DOM traversing
 const h1 = document.querySelector('h1');
 
 // going downwards: child
 console.log(h1.querySelectorAll('.highlight'));
 console.log(h1.childNodes);
 console.log(h1.children); // direct children
 h1.firstElementChild.style.color = 'white';
 h1.lastElementChild.style.color = 'orangered';
 
 // going upwards: parent
 console.log(h1.parentNode);
 console.log(h1.parentElement);
 
 h1.closest('.header').style.background = 'var(--gradient-secondary)';
 h1.closest('h1').style.background = 'var(--gradient-primary)';
 
 // going sideways: siblings
 console.log(h1.previousElementSibling);
 console.log(h1.nextElementSibling);
 
 console.log(h1.previousSibling);
 console.log(h1.nextSibling);
 
 console.log(h1.parentElement.children);
 [...h1.parentElement.children].forEach(element => {
 if (element !== h1) element.style.transform = 'scale(0.5)';
 });
 */
document.addEventListener('DOMContentLoaded', e => {
  console.log('HTML parsed and DOM tree built!');
});

window.addEventListener('load', e => {
  console.log('Page fully loaded.', e);
});

// window.addEventListener('beforeunload', e => {
//   e.preventDefault();
//   console.log(e);
// });
