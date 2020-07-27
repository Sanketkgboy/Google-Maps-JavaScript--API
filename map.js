
// Initialize and add a map
function initMap() {
    const options = {
        zoom: 4,
        center:{lat:18.5204,lng:-73.8567}
    }
    
    // map centered at Pune
    let map = new google.maps.Map(document.getElementById('map'), options)

    // Add markers on the map
    google.maps.event.addListener(map, 'click', 
        (event) => addMarker({coords:event.latLng}))

    // Array for default makers
    const markers = [
        {coords:{lat:18.5204,lng:-73.8567}, content:"<h1>Pune</h1>"},
        {coords:{lat:19.076090,lng:-72.877426}, content:"<h1>Mumbai</h1>"},
        {coords:{lat:18.407957,lng:-76.576767}, content:"<h1>Latur</h1>"}
    ]

    // For each function that takes input from markers and passes it to addMarker function
    markers.forEach(i => addMarker(i))

    // create marker function, takes coordinates, icons, content, etc as input 
    function addMarker(props) {
        let marker = new google.maps.Marker({
            position:props.coords, 
            map:map
            // Icon can be added for the markers here
        })

        // Check Content so that we can tackle undefined state.
        if(props.content){
            let infoWindow = new google.maps.InfoWindow({
                content:props.content
            })
            marker.addListener('click', () => infoWindow.open(map,marker))
        } 
        
    }
}