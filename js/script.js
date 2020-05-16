$(document).ready(function () {

  var $menu_drop = $('.menu--dropped'),
      $menu_mobile = $('.menu-mobile'),
      $nav_link = $('.menu__link-header'),
      $popup = $('.popup__btn');

  $menu_drop.click(function() {
    $menu_drop.toggleClass('menu--active');
    $menu_mobile.toggleClass('active');
    $('body').toggleClass('lock');
  });

  $nav_link.click(function() {
    $menu_drop.toggleClass('menu--active');
    $menu_mobile.toggleClass('active');
    $('body').toggleClass('lock');
  });

  $popup.click(function() {
    $menu_drop.removeClass('menu--active');
    $menu_mobile.removeClass('active');
    $('body').removeClass('lock');
  });

  $('.form__input').focus(function(){
    $(this).data('placeholder',$(this).attr('placeholder'))
    $(this).attr('placeholder','');
  });

  $('.form__input').blur(function(){
    $(this).attr('placeholder',$(this).data('placeholder'));
  });

  document.getElementById("enable-scroll").onclick = function () {
    enableScroll();
  };

  document.getElementById("popup").onclick = function () {
    enableScroll();
  };

  $(document.body).on('click', '.popup__btn', function(){
    disableScroll();
  });

  $(document.body).on('click', '.form__input', function(){
    disableScroll();
  });

  // left: 37, up: 38, right: 39, down: 40,
  // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
  var keys = {
    37: 1,
    38: 1,
    39: 1,
    40: 1
  };

  function preventDefault(e) {
    e.preventDefault();
  }

  function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  }

  // modern Chrome requires { passive: false } when adding event
  var supportsPassive = false;
  try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
      get: function () {
        supportsPassive = true;
      }
    }));
  } catch (e) {}

  var wheelOpt = supportsPassive ? {
    passive: false
  } : false;
  var wheelEvent = 'onwheel' in document.createElement('body') ? 'wheel' : 'mousewheel';

  // call this to Disable
  function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
  }

  // call this to Enable
  function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
  }

});