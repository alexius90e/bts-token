const menuOpenButton = document.querySelector('.header__burger-btn');

const navMenu = document.querySelector('.header__nav');

menuOpenButton.addEventListener('click', () => {
  navMenu.classList.add('active');
});

navMenu.addEventListener('click', (event) => {
  if (event.target !== event.currentTarget) event.currentTarget.classList.remove('active');
});
