import React from "react";
import MarkerManager from "../../util/marker_manager";

export default class BenchMap extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 }, // SF
            zoom: 13
        };
        
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        // this.map = new google.maps.Map(mapDOMNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        this.MarkerManager.updateMarkers(this.props.benches);
    }
    
    componentDidUpdate(prevProps) {
        // debugger
        if(prevProps !== this.props) {
            this.MarkerManager.updateMarkers(this.props.benches);
        }
    }

    render() {
        
        return (
            <div id="map-container" ref={ map => this.mapNode = map }>

            </div>
        )
    }
}