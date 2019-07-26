console.log(window.innerWidth);

const ham = document.getElementById('ham');
const cls = document.getElementById('cls');
const nav = document.getElementById('navMobile');

const openSlide = () => {
  nav.style.display = 'block';
  ham.style.display = 'none';
  cls.style.display = 'block';
};

ham.addEventListener('click', openSlide);

const closeSlide = () => {
  nav.style.display = 'none';
  cls.style.display = 'none';
  ham.style.display = 'block';
};

cls.addEventListener('click', closeSlide);
