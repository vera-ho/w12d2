export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }

    updateMarkers(benches) {
        console.log("Update markers!")
        Object.values(benches).map( bench => {
            this.createMarker(bench);
        })
    }

    createMarker = bench => {
        if(!(bench.id in this.markers)) {
            let mark = new google.maps.Marker({
                position: { lat: bench.lat, lng: bench.lng},
                map: this.map, 
                title: bench.description
            })
            this.markers[bench.id] = mark;
        }
    }
}