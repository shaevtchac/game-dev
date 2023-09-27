//menu
const divTrigger = document.createElement('div');
divTrigger.setAttribute('data-menu-trigger', '');
document.body.prepend(divTrigger);

const nav = document.getElementById('main-nav');
const mobileNav = document.getElementById('mobile-nav');

document.getElementById('main-nav-button').addEventListener('click', () => {
  mobileNav.classList.remove('-top-full');
  mobileNav.classList.add('top-0')
})
document.getElementById('mobile-nav-button').addEventListener('click', () => {
  mobileNav.classList.add('-top-full');
  mobileNav.classList.remove('top-0');
})

document.querySelectorAll('#mobile-nav ul li').forEach(listElement => listElement.addEventListener('click', () => {
  mobileNav.classList.add('-top-full');
  mobileNav.classList.remove('top-0');
}))


const menuObserver = new IntersectionObserver(
  (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      nav.classList.remove('bg-black','top-0');
      nav.classList.add('top-10')
    } else {
      nav.classList.add('bg-black','top-0');
      nav.classList.remove('top-10')
    }
  },
  { rootMargin: `100px 0px 0px 0px` }
);

menuObserver.observe(divTrigger);



// _______________________________________________________________ animations _______________________________________________________________

const animatedElements = document.querySelectorAll('[data-animation]');

const animationObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const {
      animation,
      duration = '500ms',
      timing = 'ease-in',
      delay = '500ms',
      iteration = '1',
      direction = 'normal',
      fill = 'backwards',
    } = entry.target.dataset;
    if (entry.isIntersecting) {
      entry.target.style.animation = `${animation} ${duration} ${timing} ${delay} ${iteration} ${direction} ${fill}`;
    }
  });
});

animatedElements.forEach((element) => {
  animationObserver.observe(element);
});
