import { 
    RECEIVE_CURRENT_USER, 
    LOGOUT_CURRENT_USER 
} from "../actions/session"


// what returns if we don't have a current user
const _nullSession = {
    currentUser: null,
}

// why don't we need to name the function?
export default (state = _nullSession, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign( {}, {currentUser: action.user });
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        default:
            return state;
    }
}