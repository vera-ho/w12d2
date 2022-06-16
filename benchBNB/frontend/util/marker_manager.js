export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }

    updateMarkers(benches) {
        console.log("Update markers!")
        let test = Object.values(benches).map( bench => {
            if(!(bench.id in this.markers)) {
                // Create Marker, add to map, add to this.markers
                let mark = new google.maps.Marker({
                    position: { lat:bench.lat, lng: bench.lng},
                    map: this.map
                })
                this.markers[bench.id] = mark;
            }
        })
        console.log(this.markers)
        console.log(test);
    }
}