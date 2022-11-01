let marker, map;

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const posicion = { lat: -25.344, lng: 131.031 };
    // The map, centered at Uluru
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion,
    });
    // The marker, positioned at Uluru
    marker = new google.maps.Marker({
        position: posicion,
        map
    })

    const posShibuya = {lat: 35.65906797924146, lng: 139.70062997054822}
    const posJuvetusStadium = {lat: 45.10983143968439, lng: 7.641208248138341}

    const markShibuya= new google.maps.Marker({
        position: posShibuya,
        map
    })

    const markJuventus= new google.maps.Marker({
        position: posJuvetusStadium,
        map
    })
    geoPosicion()
}

function geoPosicion() {
    if (navigator.geolocation) {
        const geoLoc = navigator.geolocation
        const options = { timeout: 60000 }
        const watchPos = geoLoc.watchPosition(centraMapa, onError, options)
    } else {
        alert("Este navegador no admite geolocalización")
    }
}

function centraMapa(position) {
    const nuevaPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    marker.setPosition(nuevaPos)
    map.setCenter(nuevaPos)
}

function onError(error) {
    console.log("Se ha producido un error y lo hemos gestionado")
    console.error(error)
}