if (window.google && window.google.maps) {
  var map;
  var mapLocation = new google.maps.LatLng(53.2108912, 6.5390657);

  function mapInit () {
    var mapCanvas = document.getElementById('map-canvas');

    if (mapCanvas) {
      var mapOptions = {
        zoom: 16,
        center: mapLocation,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        draggable: true,
      };

      map = new google.maps.Map(mapCanvas, mapOptions);

      var mapMarker = new google.maps.Marker({
        position: mapLocation,
        clickable: false,
        map: map,
        icon: '/images/marker-orange.svg'
      });

      mapCenter();
      google.maps.event.addDomListener(window, 'resize', mapCenter);
    }
  }

  function mapCenter () {
    map.setCenter(mapLocation);
  }

  google.maps.event.addDomListener(window, 'load', mapInit);
}
