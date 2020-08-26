
var baldios = 'https://cdn.glitch.com/c2ad09d8-ff46-4f8d-ba20-97e404d0626d%2Fno_bal.geojson?v=1598054286008'
var alcaldias = 'https://cdn.glitch.com/c2ad09d8-ff46-4f8d-ba20-97e404d0626d%2Fb.geojson?v=1598279447038'



function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 11,
      center: {lat: 19.37278, lng: -99.14772,},
    });
  map.data.loadGeoJson( 'https://cdn.glitch.com/c2ad09d8-ff46-4f8d-ba20-97e404d0626d%2Fno_bal.geojson?v=1598054286008');

  // Set the stroke width, and fill color for each polygon
map.data.setStyle({
  fillColor: '#07095f',
  strokeWeight: 3
});
  
  var infowindow = new google.maps.InfoWindow();

  map.data.addListener('click', function(event) {
    var feat = event.feature;
  var html =  "<h1>"+"USO:"+"</h1>"+"   "+"<h1>"+feat.getProperty('USO_CSTR')+"</h1><br>"+"<h1>"+"CLAVE:"+"</h1>"+"  "+"<h1>"+feat.getProperty('clave')+"</h1>";
    infowindow.setContent(html);
    infowindow.setPosition(event.latLng);
    infowindow.setOptions({pixelOffset: new google.maps.Size(0,-34)});
    infowindow.open(map);
 });
 




}

