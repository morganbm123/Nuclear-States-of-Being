/*
Original randomizing selector from Sam Lavigne
*/
function randint(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let bg_images = Array.from(document.querySelectorAll('#bg_images img'));
bg_images.forEach((c) => {
  c.style.display = 'none';
  setTimeout(() => {
    c.style.width = randint(250, 500) + 'px';
    c.style.display = 'block';
    c.classList.add('bg');
  }, randint(15000, 60000));
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

//slideshow

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}



function initMap() {

  // Create a new StyledMapType object, passing it an array of styles,
  // and the name to be displayed on the map type control.
  var styledMapType = new google.maps.StyledMapType(
    [{
        "elementType": "geometry",
        "stylers": [{
          "color": "#242f3e"
        }]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#746855"
        }]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#242f3e"
        }]
      },
      {
        "featureType": "administrative.land_parcel",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#d59563"
        }]
      },
      {
        "featureType": "administrative.neighborhood",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#d59563"
        }]
      },
      {
        "featureType": "poi.business",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{
          "color": "#263c3f"
        }]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#6b9a76"
        }]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [{
          "color": "#38414e"
        }]
      },
      {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#212a37"
        }]
      },
      {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#9ca5b3"
        }]
      },
      {
        "featureType": "road.arterial",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{
          "color": "#746855"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#1f2835"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#f3d19c"
        }]
      },
      {
        "featureType": "road.local",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [{
          "color": "#2f3948"
        }]
      },
      {
        "featureType": "transit.station",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#d59563"
        }]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
          "color": "#17263c"
        }]
      },
      {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#515c6d"
        }]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#17263c"
        }]
      }
    ], {
      name: 'Styled Map'
    });

  // Create a map object, and include the MapTypeId to add
  // to the map type control.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 25.225937,
      lng: -38.043725
    },
    zoom: 2,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
        'styled_map'
      ]
    }
  });

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');

  var markers = [{
      coords: {
        lat: 46.194628,
        lng: -83.019998
      },
      content: '<a href ="https://www.camecofuel.com/business/blind-river-refinery" target="_blank">Cameco Blind River Refinery</a>'
    },
    {
      coords: {
        lat: 43.943624,
        lng: -78.295334
      },
      content: '<a href ="https://www.camecofuel.com/business/port-hope-conversion-facility" target="_blank">Cameco Port Hope Conversion Facility</a>'
    },
    {
      coords: {
        lat: 58.191698,
        lng: -103.698222
      },
      content: '<a href ="https://en.wikipedia.org/wiki/Rabbit_Lake_mine" target="_blank">Cameco Rabbit Lake Mine</a>'
    }, {
      coords: {
        lat: 58.192983,
        lng: -103.692681
      },
      content: '<a href ="https://www.hatch.com/en/Projects/Metals-And-Minerals/Eagle-Point-Mine" target="_blank">Cameco Eagle Point Min</a>'
    },
    {
      coords: {
        lat: 58.068378,
        lng: -104.540399
      },
      content: '<a href ="https://www.cameco.com/businesses/uranium-operations/canada/cigar-lake" target="_blank">Cameco Cigar Lake Mine</a>'
    },
    {
      coords: {
        lat: 52.114195,
        lng: -106.702220
      },
      content: '<a href ="https://www.cameco.com/about" target="_blank">Cameco Headquarters</a>'
    }, {
      coords: {
        lat: 47.173041,
        lng: 8.514702
      },
      content: '<a href ="https://www.theglobeandmail.com/globe-investor/investment-ideas/cameco-vs-the-taxman-the-squabble-that-keeps-on-growing/article18989010/" target="_blank">Cameco Europe Min</a>'
    },
    {
      coords: {
        lat: 58.068378,
        lng: -104.540399
      },
      content: '<a href ="http://www.cuenrg.com.au/IRM/content/default.aspx" target="_blank">Cue Energy resources</a>'
    },
    {
      coords: {
        lat: 46.553825,
        lng: -119.558373
      },
      content: '<a href ="https://en.wikipedia.org/wiki/Hanford_Site" target="_blank">Hanford Site </a>'
    },
    {
      coords: {
        lat: 41.269554,
        lng: -73.952337
      },
      content: '<a href ="https://en.wikipedia.org/wiki/Indian_Point_Energy_Center" target="_blank">Indian Point Energy Center</a>'
    }, {
      coords: {
        lat: -22.479023,
        lng: 15.047899
      },
      content: '<a href ="https://en.wikipedia.org/wiki/R%C3%B6ssing_uranium_mine" target="_blank">Rossing Uranium Mine</a>'
    }, {
      coords: {
        lat: -1.397305,
        lng: 13.158993
      },
      content: '<https://www.britannica.com/place/Mounana" target="_blank">Mounana Gabon</a>'
    },
    {
      coords: {
        lat: 18.082295,
        lng: 7.361919
      },
      content: '<p>Imouraren Mine Niger</p>'

    }, {
      coords: {
        lat: 47.230556,
        lng: 0.170556
      },
      content: '<p>Chinon Nuclear Power Plant</p>'
    },
    {
      coords: {
        lat: 50.090000,
        lng: 4.789444
      },
      content: '<p>Chooz Nuclear Power Plant</p>'
    },
    {
      coords: {
        lat: 46.456667,
        lng: 0.652778
      },
      content: '<p>Civaux Nuclear Power Plant</p>'
    },
    {
      coords: {
        lat: 44.633056,
        lng: 4.756667
      },
      content: '<p>Cruas Nuclear Power Plant</p>'
    },
    {
      coords: {
        lat: 47.733681,
        lng: 2.517285
      },
      content: '<p>Dampierre Nuclear Power Plant</p>'
    },
    {
      coords: {
        lat: 47.903225,
        lng: 7.562306
      },
      content: '<p>Fessenheim Nuclear Power Plant</p>'
    },
    {
      coords: {
        lat: 49.536389,
        lng: -1.881667
      },
      content: '<p>Flamanville Nuclear Power Plant</p>'
    },
    {
      coords: {
        lat: 44.106700,
        lng: 0.845300
      },
      content: '<p>Golfech Nuclear Power Plant</p>'
    },
    {
      coords: {
        lat: 51.015278,
        lng: 2.136111
      },
      content: '<p>Gravelines Nuclear Power Plant</p>'
    },
    {
      coords: {
        lat: 48.515278,
        lng: 3.517778
      },
      content: '<p>Nogent Nuclear Power Plant</p>'
    },
    {
      coords: {
        lat: 49.858056,
        lng: 0.635556
      },
      content: '<p>Paluel Nuclear Power Plant</p>'
    },
    {
      coords: {
        lat: 49.976667,
        lng: 1.211944
      },
      content: '<p>Penly Nuclear Power Plant</p>'
    },
    {
      coords: {
        lat: 45.404296,
        lng: 4.755535
      },
      content: '<p>Saint-Alban Nuclear Power Plant</p>'
    },
    {
      coords: {
        lat: 44.329722,
        lng: 4.732222
      },
      content: '<p>Tricastin Nuclear Power Plant</p>'
    },
    {
      coords: {
        lat: 45.255980,
        lng: -0.690157
      },
      content: '<p>Blayais Nuclear Power Plant</p>'
    },
    {
      coords: {
        lat: 44.144620,
        lng: 4.706927
      },
      content: '<p>Marcoule Nuclear Power Plant</p>'
    },
    {
      coords: {
        lat: 45.800162,
        lng: 5.266727
      },
      content: '<p>Bugey Nuclear Power Plant</p>'
    },
    {
      coords: {
        lat: 49.415257,
        lng: 6.214730
      },
      content: '<p>Cattenom Nuclear Power Plant</p>'
    },
    {
      coords: {
        lat: 47.508706,
        lng: 2.875364
      },
      content: '<p>Belleville Nuclear Power Plant</p>'
    }
  ];

  // Loop through markers
  for (var i = 0; i < markers.length; i++) {
    // Add marker
    addMarker(markers[i]);
  }

  // Add Marker Function
  function addMarker(props) {
    var marker = new google.maps.Marker({
      position: props.coords,
      map: map,
      //icon:props.iconImage
    });

    // Check for customicon
    if (props.iconImage) {
      // Set icon image
      marker.setIcon(props.iconImage);
    }

    // Check content
    if (props.content) {
      var infoWindow = new google.maps.InfoWindow({
        content: props.content
      });

      marker.addListener('click', function() {
        infoWindow.open(map, marker);
      });
    }
  }
}