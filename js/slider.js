$(document).ready(function () {
  $(".slider").slick({
    dots: false,
    slidesToShow: 3,
    slidsToScroll: 1,
    draggable: false,
    waitForAnimate: false,
    responsive: [{
        breakpoint: 1126,
        settings: {
          slidesToShow: 2,
          draggable: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 825,
        settings: {
          slidesToShow: 1,
          draggable: true,
          dots: true,
          arrows: false,
        },
      },
    ],
  });

});