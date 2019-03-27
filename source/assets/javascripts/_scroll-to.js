$(function () {
  "use strict";

  var offsetTop = -60;

  $("a[data='scroll-to']").on("click", function () {
    $.scrollTo(this.hash, 400, {
      offset: offsetTop,
    });

    $('.site-navigation').toggleClass('navigation-open');

    $('a').each(function () {
      $(this).removeClass('active');
    }),

    $(this).toggleClass('active');
    return false;
  });

  $("a[data-scroll-to-form]").on("click", function() {
    var $target = $(this.hash);

    $.scrollTo($target, 400, {
      offset: offsetTop,
      onAfter: function() {
        $target
          .find("input, textarea, select")
          .not(
            "input[type=hidden],input[type=button],input[type=submit],button"
          )
          .filter(":enabled:visible:first")
          .focus();
      }
    });

    return false;
  });
});
