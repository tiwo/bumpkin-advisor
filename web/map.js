// (()=>{

var ba_map = L.map('ba-map').fitWorld();

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    tileSize: 512,
    zoomOffset: -1,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoidGl3byIsImEiOiJja3Nmdnc5a3oxZThoMzBvZHV4eTN0eXhwIn0.5eyeTLtyEYGIm8oCKbEbGg'
})


ba_map.locate({setView: false, maxZoom: 10});

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