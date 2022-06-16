import React from "react";
import { connect } from "react-redux";
// import BenchIndex from "./bench_index";
import search from "./search"
import { fetchBenches } from "../../actions/bench_actions";

const mSTP = state => {
    return {
        benches: state.entities.benches
    }
}

const mDTP = dispatch => {
    return {
        fetchBenches: () => dispatch(fetchBenches())
    }
}

export default connect(mSTP, mDTP)(search);