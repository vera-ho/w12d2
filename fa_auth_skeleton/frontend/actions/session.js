// postUser, postSession, deleteSession
import * as APIUtils from "../utils/session";    

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

const receiveCurrentUser = (user) => {
    return {
        type: RECEIVE_CURRENT_USER,
        user
    }
}

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
})

// Thunk Actions
export const createNewUser = formUser => dispatch => APIUtils.postUser(formUser)        // createNewUser curries and receives dispatch from thunk middlware
    .then( user => dispatch(receiveCurrentUser(user)));                                 // then call postUser, invoking with formUser <--- returns a promise from ajax request
                                                                                        // get promise, and dispatch an action using received user from ajax request

export const login = formUser => dispatch => APIUtils.postSession(formUser)
    .then( user => dispatch(receiveCurrentUser(user)));

export const logout = () => dispatch => APIUtils.deleteSession()
    .then( () => dispatch(logoutCurrentUser()));