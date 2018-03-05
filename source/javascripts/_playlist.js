$(window).on('load resize', function () {
  $('iframe[src*="embed.spotify.com"]').each( function () {
    $(this).css('width', $(this).parent().css('width'));
    $(this).attr('src', $(this).attr('src'));
    $(this).removeClass('loaded');

    $(this).on('load', function () {
      $(this).addClass('loaded');
    });
  });
});
