  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      'sandstone rock formation in the southern part of the '+
      'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
      'south west of the nearest large town, Alice Springs; 450&#160;km '+
      '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
      'features of the Uluru - Kata Tjuta National Park. Uluru is '+
      'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
      'Aboriginal people of the area. It has many springs, waterholes, '+
      'rock caves and ancient paintings. Uluru is listed as a World '+
      'Heritage Site.</p>'+
      '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
      'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>';

var map; 
function initMap() {
	map = new google.maps.Map(document.getElementById('googleMap'), {
		center: {lat: 0, lng: 0},
		zoom: 1
	});
}

var marker;
var infowindow;
function createMarkerAndInfoWindow(latitude, longitude, message) {
	marker = new google.maps.Marker({
		position: {lat: latitude, lng: longitude},
		map: map,
		title: message
	});
	infowindow = new google.maps.InfoWindow({
		content: "<div class='content'>" + message + "</div>",
		maxWidth: 300
	});
	marker.addListener('click', function() {
		infowindow.open(map, marker);
	});
	map.panTo(marker.getPosition());
	return false;
}

$(document).ready(function() {
	initMap();
	$('form').submit(function(event) {
		var lat = Number($('#latitude').val());
		var lng = Number($('#longitude').val());
		var msg = $('#message').val();
		createMarkerAndInfoWindow(lat, lng, msg);
		marker.setMap(map);
		event.preventDefault();	
	});
});