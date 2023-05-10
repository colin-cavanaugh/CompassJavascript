'use strict';
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// class App {
//   #map;
//   #mapZoomLevel = 13;
//   #mapEvent;
//   #workouts = [];

//   constructor() {
//     // Get user's position
//     this._getPosition();

//     // Get data from local storage
//     this._getLocalStorage();

//     // Attach event handlers
//     form.addEventListener('submit', this._newWorkout.bind(this));
//     inputType.addEventListener('change', this._toggleElevationField);
//     containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
//   }

//   _getPosition() {
//     if (navigator.geolocation)
//       navigator.geolocation.getCurrentPosition(
//         this._loadMap.bind(this),
//         function () {
//           alert('Could not get your position');
//         }
//       );
//   }
//   _loadMap(position) {
//     const { latitude } = position.coords;
//     const { longitude } = position.coords;
//     // console.log(`https://www.google.pt/maps/@${latitude},${longitude}`);

//     const coords = [latitude, longitude];

//     this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

//     L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//       attribution:
//         '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//     }).addTo(this.#map);

//     // Handling clicks on map
//     this.#map.on('click', this._showForm.bind(this));

//     this.#workouts.forEach(work => {
//       this._renderWorkoutMarker(work);
//     });
//   }
// }
// const app = new App();
// Initialize and add the map
// let map, infoWindow;
// function initMap() {
//   // The location of Uluru
//   const uluru = { lat: -25.344, lng: 131.031 };
//   // The map, centered at Uluru
//   const map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 4,
//     center: uluru,
//   });
//   // The marker, positioned at Uluru
//   const marker = new google.maps.Marker({
//     position: uluru,
//     map: map,
//   });
//   infoWindow = new google.maps.InfoWindow();
//   const locationButton = document.createElement('button');

//   locationButton.textContent = 'Pan to Current Location';
//   locationButton.classList.add('custom-map-control-button');
//   map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
//   locationButton.addEventListener('click', () => {
//     // Try HTML5 geolocation.
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         position => {
//           const pos = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           };

//           infoWindow.setPosition(pos);
//           infoWindow.setContent('Location found.');
//           infoWindow.open(map);
//           map.setCenter(pos);
//         },
//         () => {
//           handleLocationError(true, infoWindow, map.getCenter());
//         }
//       );
//     } else {
//       // Browser doesn't support Geolocation
//       handleLocationError(false, infoWindow, map.getCenter());
//     }
//   });
// }

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? 'Error: The Geolocation service failed.'
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

window.initMap = initMap;
// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
let map, infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 6,
  });
  infoWindow = new google.maps.InfoWindow();

  const locationButton = document.createElement('button');

  locationButton.textContent = 'Pan to Current Location';
  locationButton.classList.add('custom-map-control-button');
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener('click', () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent('Location found.');
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? 'Error: The Geolocation service failed.'
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

window.initMap = initMap;

////////// Application elements ///////////
const mapForm =  document.querySelector('.compass__form');
const inputAddress = document.querySelector('.form__input--address')
const inputPostalCode = document.querySelector('.form__input--postal')
const inputLocality = document.querySelector('.form__input--locality')
const inputState = document.querySelector('.form__input--state')
const inputCountry = document.querySelector('.form__input--country')
const inputLongitude = document.querySelector('.form__input--longitude')
const inputLatitude = document.querySelector('.form__input--latitude')

class Compass {
  #map;
  #mapZoomLevel = 13;
  #mapEvent;
  #mapRoutes = [];

  constructor() {
    // Get user's location
    this.getLocation();

    // Get data from local storage
    this.getLocalStorage();

    // Attach event handlers
    mapForm.addEventListener('submit', this.moveToPopup.bind(this))
  }
  getLocation() {
    if(navigator.geolocation)
    navigator.geolocation.getCurrentPosition(
      this.loadMap.bind(this),
      function() {
        alert('Could not retrieve current location')
      }
    )
  }

  loadMap(location) {
    const {latitude} = location.coords
    const {longitude} = location.coords
    console.log(`https://www.google.pt/maps/@${latitude},${longitude}`);

    const coords = [latitude, longitude]
    this.#map = L.map('map').setView(coords, this.#mapZoomLevel)
    
    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // Handling clicks on map
    this.#map.on('click', this._showForm.bind(this));

    this.#mapRoutes.forEach(route => {
      this.renderRouteMarker(route);
    });

  }
}
