$(document).ready(function () {
  $(document).on('scroll', onScroll);

  //smoothscroll
  $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off('scroll');

      $('a').each(function () {
        $(this).removeClass('active');
      }),

      $(this).addClass('active');
      $('.site-navigation').toggleClass('navigation-open');

      var target = this.hash,
          menu = target;
      $target = $(target);
      $('html, body').stop().animate({
        'scrollTop': $target.offset().top+2
      }, 500, 'swing', function () {
          $(document).on('scroll', onScroll);
        });

    });
});

function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('#navigation a.root-link').not('#navigation a.language-link').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr('href'));

    if (refElement.position().top <= scrollPos + 60 && refElement.position().top + refElement.height() > scrollPos) {
      $('#navigation ul li a').removeClass('active');
      currLink.addClass('active');
    } else {
      currLink.removeClass('active');
    }
  });
}
