import {
    RECEIVE_BENCHES,
    RECEIVE_BENCH
} from "../actions/bench_actions"

export const benchesReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign( {}, state);

    switch(action.type) {
        case RECEIVE_BENCHES:
            Object.assign( nextState, action.benches);
            return nextState;
        case RECEIVE_BENCH:
            nextState[action.bench.id] = action.bench;
            return nextState;
        default: 
            return state;
    }
}