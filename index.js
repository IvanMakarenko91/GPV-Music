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


// Slider image
let img__slider = document.getElementsByClassName('img__slider');

let etape = 0;

let nbr__img = img__slider.length;

let precedent = document.querySelector('.precedent');
let suivant = document.querySelector('.suivant');

function imageSlider() {
  for(let i = 0; i < nbr__img; i++) {
    img__slider[i].classList.remove('activer');
  }
}

suivant.addEventListener('click', () => {
  etape ++;
  if(etape >= nbr__img) {
    etape = 0;
  }
  imageSlider();
  img__slider[etape].classList.add('activer');
})

precedent.addEventListener('click', () => {
  etape--;
  if(etape < 0) {
    etape = nbr__img - 1;
  }
  imageSlider();
  img__slider[etape].classList.add('activer');
})

setInterval(function () {
  etape ++;
  if(etape >= nbr__img) {
    etape = 0;
  }
  imageSlider();
  img__slider[etape].classList.add('activer');
}, 5000);


// Déclaration du formulaire
(function() { 
  'use strict'
  let form = document.getElementById('formulaire'); 
  form.addEventListener('submit', function(event) {
      
      Array.from(form.elements).forEach((input) => { 
          if (input.type !== "submit") { 
              if (!validateFields(input)) { 
                  
                  event.preventDefault();
                  event.stopPropagation();
                  
                  input.classList.remove("is-valid"); 
                  input.classList.add("is-invalid");
                  // input.nextElementSibling.style.display = 'block';
              } 
              else {
                  input.nextElementSibling.style.display = 'none';
                  input.classList.remove("is-invalid"); 
                  input.classList.add("is-valid"); 
              }
          }
      });
  }, false)
})()






// Création des fonctions de verefications

// Validation d'un champ REQUIRED
function validateRequired(input) {
  return !(input.value == null || input.value == "");
}

// Validation des caractères : LATIN & LETTRES
function validateText(input) {
  return input.value.match("^[A-Za-z]+$");
}

// Validation de l'age
function validateAge(input) {
  return input.value.match("^[0-9]{2}");
}

// Validation du nombre de caractéres : MIN & MAX
function validateLenght(input, minLength, maxLength) {
    return !(input.value.length < minLength || input.value.length > maxLength);
}

// Validation d'un e-mail
function validateEmail(input) {
  let EMAIL = input.value;
  let POSAT = EMAIL.indexOf("@");
  let POSDOT = EMAIL.lastIndexOf(".");
  return !(POSAT < 1 || (POSDOT - POSAT < 2));
}

// Validation du Numéro de téléphone
function validatePhoneNumber(input) {
  return input.value.match(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/);
}




// Validation des champs de formulaires

function validateFields(input) {
  let fieldName = input.name;
  // Validaton de l'input PRENOM
  if (fieldName == "firstname") {
      if (!validateRequired(input)) {
          return false;
      }
      if (!validateLenght(input, 2, 20)) {
          return false;
      }
      if (!validateText(input)) {
          return false;
      }
      return (true);
  }

  // Validaton de l'input NOM
  if (fieldName == "lastname") {
    if (!validateRequired(input)) {
        return false;
    }
    if (!validateLenght(input, 2, 20)) {
        return false;
    }
    if (!validateText(input)) {
        return false;
    }
    return (true);
  }

  // Validaton de l'âge
  if (fieldName == "age") {
    if (!validateRequired(input)) {
        return false;
    }
    if (!validateAge(input)) {
        return false;
    }
    return (true);
  }

  // Validaton de l'input EMAIL
  if (fieldName == "email") {
    if (!validateRequired(input)) {
        return false;
    }
    if (!validateEmail(input)) {
        return false;
    }
    return (true);
  }

  // Validaton de l'input NUMERO DE TELEPHONE
  if (fieldName == "phoneNumber") {
    if (!validateRequired(input)) {
        return false;
    }
    if (!validatePhoneNumber(input)) {
        return false;
    }
    return (true);
}
}