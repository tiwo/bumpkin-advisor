// (()=>{

var ba_map = L.map('ba-map').fitWorld();

var position_marker = null;
var position_circle = null;

var mouselatlon = null;

ba_map.addEventListener('mousemove', function(ev) {
   mouselatlon = ev.latlng;
});

document.getElementById("ba-map").addEventListener("contextmenu", function (event) {
    if (!mouselatlon) return false;

    event.preventDefault();
    L.marker([mouselatlon.lat, mouselatlon.lng], {title:`${mouselatlon.lat}, ${mouselatlon.lng}`}).addTo(ba_map);
    return false;
});


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    tileSize: 512,
    zoomOffset: -1,
    //id: 'mapbox/streets-v11',
    id: 'tiwo/ckc70qqij1t3z1iowlwrfti8q',
    accessToken: 'pk.eyJ1IjoidGl3byIsImEiOiJja3Nmdnc5a3oxZThoMzBvZHV4eTN0eXhwIn0.5eyeTLtyEYGIm8oCKbEbGg'
}).addTo(ba_map)


L.GridLayer.DebugCoords = L.GridLayer.extend({
    createTile: function (coords) {
        var tile = document.createElement('div');
        tile.innerHTML = [coords.x, coords.y, coords.z].join(', ');
        tile.style.outline = '1px solid #bbb';
        tile.style.color = '#bbb';
        return tile;
    }
});

L.gridLayer.debugCoords = function(opts) {
    return new L.GridLayer.DebugCoords(opts);
};

ba_map.addLayer( L.gridLayer.debugCoords() );

function onLocationFound(e) {

    console.log("onLocationFound", e);

    var radius = e.accuracy;

    //L.marker(e.latlng).addTo(ba_map)
    //    .bindPopup("You are within " + radius + " meters from this point").openPopup();

    if (position_marker) {
        ba_map.removeLayer(position_marker);
        ba_map.removeLayer(position_circle);
    }
    position_marker = L.marker(e.latlng);
    position_circle = L.circle(e.latlng, radius);
    position_marker.addTo(ba_map);
    position_circle.addTo(ba_map);

    console.log(position_marker, position_circle);
}

ba_map.on('locationfound', onLocationFound);

ba_map.locate({setView: true, maxZoom: 10});

/*
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    // id: 'mapbox/streets-v11',
    id: 'tiwo/ckc70qqij1t3z1iowlwrfti8q',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidGl3byIsImEiOiJja3Nmdnc5a3oxZThoMzBvZHV4eTN0eXhwIn0.5eyeTLtyEYGIm8oCKbEbGg'
}).addTo(ba_map);
*/



//})();