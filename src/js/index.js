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

window.onload = function () {
  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,


    // Navigation arrows
    navigation: {
      nextEl: '.button--forward',
      prevEl: '.button--back',
    },

    pagination: {
      el: '.slider__counter-wrapper',
      type: 'fraction',
      formatFractionTotal: function(value) {
        return '0' + value;
      },
      formatFractionCurrent: function(value) {
        return '0' + value;
      },
      renderFraction: function(currentClass, totalClass) {
        return (
          '<span class="slider__counter slider__counter--current ' + currentClass + '"></span>' +
          '<span class="slider__counter-divider"> / </span>' +
          '<span class="slider__counter ' + totalClass + '"></span>'
        );
      },
    }
  })

  console.log(document.querySelector('.button--forward'));
};
