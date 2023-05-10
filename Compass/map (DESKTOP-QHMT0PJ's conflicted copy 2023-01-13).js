'use strict';

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.031 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
  // Replace YOUR_API_KEY with your actual API key
const API_KEY = 'AIzaSyCKW4sTHJueQkLOG7LLHKq5Tlej0GGiE8k';

// Create a directions service
const directionsService = new google.maps.DirectionsService();

// Create a directions renderer
const directionsRenderer = new google.maps.DirectionsRenderer({
  map: map
});

// Define the start and end locations for the directions request
const start = 'Hamburg, MI';
const end = 'Royal Oak, MI';

// Set the request options for the directions request
const request = {
  origin: start,
  destination: end,
  travelMode: 'DRIVING'
};

// Request the directions
directionsService.route(request, function(response, status) {
  if (status === 'OK') {
    // Display the route on the map
    directionsRenderer.setDirections(response);
  } else {
    // Handle any errors
    console.error(status);
  }
});

}

window.initMap = initMap;
