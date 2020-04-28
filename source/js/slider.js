'use strict';

$(document).ready(function(){
  $('.cards-slider').slick({
    centerMode: true,
    arrows: false,
    centerPadding: '30px',
    slidesToShow: 1,
  });
});

$(document).ready(function () {
  $('.offers__slider').slick({
      slidesToShow: 1,
      arrows: false,
      dots: false,
      centerMode: true,
      centerPadding: '30px',
  });
});
