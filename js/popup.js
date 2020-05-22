$(document).ready(function () {

  $('.popup__btn').on('click', function () {
    event.preventDefault();
    $('.popup').fadeIn();
    $('.popup').css("display", "flex");

    $("#phone").mask("+7 (999) 999-99-99");

    $(document).mouseup(function (e) {
      var div = $(".popup__window");
      if (!div.is(e.target) && div.has(e.target).length === 0) {
        $('.popup').fadeOut();
      }
    });
  });

  $('.popup__btn-project').on('click', function () {
    event.preventDefault();
    $('.popup-project').fadeIn();
    $('.popup-project').css("display", "flex");

    $("#phone-project").mask("+7 (999) 999-99-99");

    $(document).mouseup(function (e) {
      var div = $(".popup__window-project");
      if (!div.is(e.target) && div.has(e.target).length === 0) {
        $('.popup-project').fadeOut();
      }
    });
  });
  
  $('.popup__button-close').on('click', function () {
    event.preventDefault();
    $('.popup, .popup-project').fadeOut();
  });

  $(".form--little").submit(function () {
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: th.serialize()
    }).done(function () {
      $.alert({
        title: 'Спасибо! Заявка отправлена',
        animation: 'top',
        content: 'В ближайшее время я свяжусь с вами для уточнения деталей.'
      });
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

  $(".form--big").submit(function () {
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: th.serialize()
    }).done(function () {
      $.alert({
        title: 'Спасибо! Заявка отправлена',
        animation: 'top',
        content: 'В ближайшее время я свяжусь с вами для уточнения деталей.'
      });
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

});