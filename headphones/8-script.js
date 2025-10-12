// 8-script.js

// Select DOM elements
const menuIcon = document.getElementById('menu-icon');
const nav = document.getElementById('nav');

// Toggle the 'active' class on click
menuIcon.addEventListener('click', () => {
  nav.classList.toggle('active');
  menuIcon.classList.toggle('open');
});
