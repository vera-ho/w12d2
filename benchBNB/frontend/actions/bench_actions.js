import * as BenchUtils from "../util/bench_api_util"

export const RECEIVE_BENCHES = "RECEIVE_BENCHES";
export const RECEIVE_BENCH = "RECEIVE_BENCH";

// Action creators
export const receiveBenches = (benches) => ({
    type: RECEIVE_BENCHES,
    benches
})

export const receiveBench = bench => ({
    type: RECEIVE_BENCH,
    bench
})

// Thunk Actions
export const fetchBenches = () => dispatch => {
    return BenchUtils.fetchBenches()
        .then( benches => dispatch(receiveBenches(benches)))
}

export const fetchBench = (bench) => dispatch => {
    return BenchUtils.receiveBench(bench)
        .then( bench => dispatch(receiveBench(bench)))
}