import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, withRouter } from "react-router-dom";

const mapStateToProps = state => {
    // debugger
    // console.log(state)
    // console.log("Boolean(state.session.currentUser: " + Boolean(state.session.currentUser))
    return {
        loggedIn: Boolean(state.session.currentUser)
    }
};

// <AuthRoute = path="" component={} />

// functional components
// auth routes -> not already logged in
const Auth = ({ loggedIn, path, component: Component }) => {
    console.log("Auth loggedIn: " + loggedIn)
    return <Route 
        path={path}
        render={ props => (
            loggedIn ? <Redirect to="/" /> : <Component {...props} />
        )}
    />
};

// protected route - logged in users only
const Protected = ({ loggedIn, path, component: Component }) => {
    console.log("Protected loggedIn: " + loggedIn);
    return <Route
        path={path}
        render={ props => (
            loggedIn ? <Component {...props} /> : <Redirect to="/signup" />
        )}
    />
};

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));