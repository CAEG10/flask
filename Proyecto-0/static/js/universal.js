 // The first parameter are the coordinates of the center of the map
 // The second parameter is the zoom level

    var map = L.map('map', {									//"ZOOM CONTROL"
        minZoom: 0.5,											//MAPA
        maxZoom: 18,										
        zoomSnap: 0,										//zoomSnap to 0.5, the valid zoom levels of the map will be 0, 0.5, 1, 1.5, 2, and so on
        zoomDelta: 0.5										//AUMENTO DEL ZOOM
});
    
var positron = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'ESPACIOS'
}).addTo(map);

L.control.scale({maxWidth: 200}).addTo(map);				//SCALA

map.setView([-33.43492, -70.615053], 16);					//POSICION

var ZoomViewer = L.Control.extend({							//ZOOM VIEW
    onAdd: function(){

        var container= L.DomUtil.create('div');
        var gauge = L.DomUtil.create('div');
        container.style.width = '200px';
        container.style.background = 'rgba(255,255,255,0.7)';
        container.style.textAlign = 'left';
        map.on('zoomstart zoom zoomend', function(ev){
            gauge.innerHTML = 'Zoom level: ' + map.getZoom();
        })
        container.appendChild(gauge);

        return container;
    }
});

(new ZoomViewer).addTo(map);

L.marker([-33.43492, -70.615053]).addTo(map)
.bindPopup('UNAB - AV')
.openPopup();

var popup = L.popup();


function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Hiciste clic en el mapa " + e.latlng.toString())
        .openOn(map);

}
map.on('click', onMapClick);
map.doubleClickZoom.disable();
