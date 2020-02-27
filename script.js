var mymap = L.map('mapid').setView([41.3878942,2.169494], 16);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoib3Jpb2w5MCIsImEiOiJjazcxdWpmNzUwMjZ4M2tuczZuZjF0cTFkIn0.T_LGNOoWfCMtcEHBQY-oGg', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

var marker = L.marker([41.386911, 2.165959]).addTo(mymap);
marker.bindPopup("<b>Restaurant centfocs</b><br><br>Restaurante mediterráneo.<br>Carrer de Balmes, 16, 08007 Barcelona").openPopup();
var marker2 = null;
function onMapClick(e) {
    if(marker2 != null)marker2.remove();
    marker2 = L.marker(e.latlng).addTo(mymap);
    marker2.bindPopup("<b>Latitud: " + e.latlng.lat + "<br>Longitud: " + e.latlng.lng + "</b>").openPopup();
    mymap.fitBounds(marker2);
}

mymap.on('click', onMapClick);