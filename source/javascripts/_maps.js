$(document).ready(function () {

  function initialize() {
    var myLatlng = new google.maps.LatLng(53.2108912, 6.5390657);
    var imagePath = '/images/marker.png';
    var mapOptions = {
      zoom: 14,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    //Callout Content
    var contentString = 'EM2 "The Barn"';

    //Set window width + content
    var infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 500,
    });

    //Add Marker
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      icon: imagePath,
      title: 'EM2 "The Barn"',
    });

    google.maps.event.addListener(marker, 'click', function () {
      infowindow.open(map, marker);
    });

    //Resize Function
    google.maps.event.addDomListener(window, 'resize', function () {
      var center = map.getCenter();
      google.maps.event.trigger(map, 'resize');
      map.setCenter(center);
    });
  }

  google.maps.event.addDomListener(window, 'load', initialize);

});
