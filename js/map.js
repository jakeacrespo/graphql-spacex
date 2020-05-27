let map;

function setLaunchesPoints() {
  const latLng = { lat: 28.5618571, lng: -80.577366 };
  const marker = new google.maps.Marker({
    position: latLng,
    map: map,
    title: "Cape Canaveral Air Force Station Space Launch Complex 40"
  });
}

function initMap() {
  var mapOptions = {
    center: new google.maps.LatLng(
      // (0, 0),
      45.1484444,
      7.9187083
    ),
    zoom: 2,
    minZoom: 2
  };

  map = new google.maps.Map(document.getElementById("map"), mapOptions);

  setLaunchesPoints();
}
