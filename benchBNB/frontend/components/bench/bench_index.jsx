import React from "react";
import BenchIndexItem from "./bench_index_item";
// import { Link } from "react-router-dom";

export default class BenchIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchBenches();
    }

    render() {
        // debugger
        // if(!this.props.benches) return;
        const benches = Object.values(this.props.benches);
        
        return (
            <div>
                <ul>
                    {
                    // does bench have to be passed in?
                    benches.map( bench => {
                        return (
                            <BenchIndexItem key={bench.id} bench={bench} />
                        )
                    })
                    }
                </ul>
            </div>
        )
    }
}