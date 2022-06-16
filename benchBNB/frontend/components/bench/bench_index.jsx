import React from "react";
import BenchIndexItem from "./bench_index_item";

export default class BenchIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchBenches();
    }

    render() {
        const benches = Object.values(this.props.benches);
        
        return (
            <div>
                <ul>
                    {
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