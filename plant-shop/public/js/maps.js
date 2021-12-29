// Initialize and add the map
function initMap() {
  // The location of Poltava
  const poltava = { lat: 49.588905627941685, lng: 34.557537769309235 };
  // The map, centered at Poltava
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: poltava,
  });
  // The marker, positioned at Poltava
  const marker = new google.maps.Marker({
    position: poltava,
    map: map,
  });
}