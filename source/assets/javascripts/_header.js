$(function () {
  var headerHeight = 60;
  var $header = $('[data-header="fixed"]');
  var $window = $(window);

  $window.scroll(function () {
    if ($window.scrollTop() > headerHeight / 2) {
      $header.addClass('header-fixed');
    } else {
      $header.removeClass('header-fixed');
    }
  });
});
