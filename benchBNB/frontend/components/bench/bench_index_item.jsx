import React from "react";
// import { Link } from "react-router-dom";

export default class BenchIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const bench = this.props.bench;

        return (
            <li>
                <span>Bench Description: {bench.description} </span><br></br>
                <span>Bench Latitude: {bench.lat} </span><br></br>
                <span>Bench Longitude: {bench.lng} </span>
            </li>
        )
    }
}