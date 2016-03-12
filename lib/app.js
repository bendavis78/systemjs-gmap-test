import GoogleMaps from 'google-maps';

new GoogleMaps.Map(document.getElementById('map'), {
    center: {lat: -28.0, lng: 22.0},
    zoom: 6
});
