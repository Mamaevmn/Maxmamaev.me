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

  $('.popup__button-close').on('click', function () {
    event.preventDefault();
    $('.popup').fadeOut()
  });

  $("form").submit(function () {
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: th.serialize()
    }).done(function () {
      $.alert({
        title: 'Спасибо! Заявка отправлена',
        animation: 'top',
        content: 'В ближайшее время мы свяжемся с вами для уточнения деталей.'
      });
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

});