

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
