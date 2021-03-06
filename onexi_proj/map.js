// function initMap() {
//     var latlng = new google.maps.LatLng(39.305, -76.617);
//     map = new google.maps.Map(document.getElementById('map'), {
//         center: latlng,
//         zoom: 12
//     });
// }

// initialize the map
var map = L.map('map').setView([42.35, -71.08], 13);

$.getJSON("neighborhoods.geojson",function(hoodData){
    L.geoJson( hoodData ).addTo(map);
});

// load a tile layer
L.tileLayer('http://tiles.mapc.org/basemap/{z}/{x}/{y}.png',
    {
        attribution: 'Tiles by <a href="http://mapc.org">MAPC</a>, Data by <a href="http://mass.gov/mgis">MassGIS</a>',
        maxZoom: 17,
        minZoom: 9
    }).addTo(map);
