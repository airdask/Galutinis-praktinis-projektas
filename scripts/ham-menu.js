const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
const menuItems = document.querySelectorAll('.off-screen-menu ul li a');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        hamMenu.classList.remove('active');
        offScreenMenu.classList.remove('active');
    });
});


const navbar = document.getElementById('navbar');
console.log(navbar);

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('solid');
  } else {
    navbar.classList.remove('solid');
  }
});
