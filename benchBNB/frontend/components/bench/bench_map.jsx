import React from "react";
// import BenchIndexItem from "./bench_index_item";

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
    }


    render() {
        
        return (
            <div id="map-container" ref={ map => this.mapNode = map }>

            </div>
        )
    }
}