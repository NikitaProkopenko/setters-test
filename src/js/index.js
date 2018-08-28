'use strict';

var mainNav = document.querySelector('.main-nav');
var toggleButton = document.querySelector('.button.button--toggle');

toggleButton.addEventListener('click', function() {
  if (mainNav.classList.contains('closed')) {
    mainNav.classList.remove('closed');
    mainNav.classList.add('opened');
  } else {
    mainNav.classList.add('closed');
    mainNav.classList.remove('opened');
  }
});


