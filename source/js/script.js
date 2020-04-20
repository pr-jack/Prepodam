'use strict';

var navAcces = document.querySelector('.page-nav__acces');
var accesButtonOpen = document.querySelector('.page-nav__burger-button');
var accesButtonClose = document.querySelector('.page-nav__togle-button');
var navBurger = document.querySelector('.page-nav__burger');

  accesButtonOpen.addEventListener('click', function() {

    navAcces.classList.remove('page-nav__acces--closed');
    navAcces.classList.add('page-nav__acces--opened');
    accesButtonClose.classList.add('page-nav__togle-button--opened');
    navBurger.classList.add('page-nav__burger--hidden');
  });

  accesButtonClose.addEventListener('click', function() {

    navAcces.classList.remove('page-nav__acces--opened');
    navAcces.classList.add('page-nav__acces--closed');
    accesButtonClose.classList.remove('page-nav__togle-button--opened');
    navBurger.classList.remove('page-nav__burger--hidden');
  });
