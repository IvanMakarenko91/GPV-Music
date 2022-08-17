// Sticky navbar
window.addEventListener("scroll", () => {
  var header = document.querySelector("header");
  var menu = document.querySelector(".toggle-menu");
  header.classList.toggle("sticky", window.scrollY > 0);
  menu.classList.toggle("stickyM", window.scrollY > 0);
});

// Menu boutton toggle
var menu = document.querySelector(".menu");
var toggle_menu = document.querySelector(".toggle-menu");
var menuA = document.querySelectorAll(".menu li a");

toggle_menu.addEventListener("click", () => {
  toggle_menu.classList.toggle("active");
  menu.classList.toggle("responsive");
});

for (i = 0; i < menuA.length; i++) {
  menuA[i].addEventListener("click", () => {
    menu.classList.remove("responsive");
    toggle_menu.classList.remove("active");
  });
}

// Compteur automatique
let valueDisplays = document.querySelectorAll(".num");
let interval = 1600;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(() => {
    startValue += 2;
    valueDisplay.style.fontSize = 30 + "px";
    valueDisplay.textContent = "+ " + startValue;
    if(startValue == endValue){
      clearInterval(counter);
    }
  }, duration);
})

// Slide Toggle Down
var quoteContainer = document.querySelectorAll(".quote-container");
var down = document.getElementsByClassName("plusIcon");
var appart = document.querySelectorAll(".appart");

function enleverActiveImages() {
  for (let i = 0; i < quoteContainer.length; i++) {
    quoteContainer[i].addEventListener("click", () => {
      down[i].classList.toggle("rotate");
      appart[i].classList.toggle("apparition");
    });
  }
}

enleverActiveImages();


// ScrollBar Animation

const ecole = document.querySelector('#ecole');
const myProgressBar = document.querySelector(".progress");
const myProgressBar2 = document.querySelector(".progress2");
const myProgressBar3 = document.querySelector(".progress3");
const myProgressBar4 = document.querySelector(".progress4");

function updateProgressBar(progressBar, value) {
  value = Math.round(value);
  progressBar.querySelector(".progress__fill").style.width = `${value}%`;
  progressBar.querySelector(".progress__text").textContent = `${value}%`;
}

window.addEventListener('scroll', () => {

    const {scrollTop, clientHeight} = document.documentElement;

    const topElementToTopViewport = ecole.getBoundingClientRect().top;

    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.6){
        updateProgressBar(myProgressBar, 92)
        updateProgressBar(myProgressBar2, 98)
        updateProgressBar(myProgressBar3, 80)
        updateProgressBar(myProgressBar4, 83)
    }
})
// const contenu = Array.from(document.querySelectorAll(".progress"));