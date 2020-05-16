$(document).ready(function () {

  $('.menu__icon--hidden').on('click', function () {

    $('.menu__icon--hidden').removeClass('active');

    if ($(this).next('.header__menu-list--hidden').css("display") == "none") {
      $('.header__menu-list--hidden').hide('normal');
      $(this).next('.header__menu-list--hidden').toggle('normal');
      $('.menu__icon--hidden').removeClass('active');
      $(this).toggleClass('active');
    } else $('.header__menu-list--hidden').hide('normal');
    return false;
  });

  $(document).on('click', function (e) {
    var menu = $('.header__menu-list--hidden');
    if (!menu.is(e.target) && menu.has(e.target).length === 0) {
      menu.hide('normal');
    }
  });

  $(".menu__link-header--hidden").on('click', function (event) {
    var toggle = $(this).parent().parent().is(":visible");
    if (toggle) {
      $('.header__menu-list--hidden').hide();
    }
  });

});