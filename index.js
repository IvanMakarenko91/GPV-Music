// Sticky navbar
window.addEventListener('scroll', () => {
  var header = document.querySelector('header');
  var menu = document.querySelector('.toggle-menu')
  header.classList.toggle('sticky', window.scrollY > 0);
  menu.classList.toggle('stickyM', window.scrollY > 0);
})

// Menu boutton toggle
var menu = document.querySelector(".menu");
var toggle_menu = document.querySelector(".toggle-menu");

toggle_menu.addEventListener('click', () => {
  toggle_menu.classList.toggle('active') ;
  menu.classList.toggle('responsive') ;
})