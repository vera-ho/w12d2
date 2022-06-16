import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
// import BenchIndexContainer from "./bench/bench_index_container";
import SearchContainer from "./bench/search_container";

import { Route } from 'react-router-dom';
import { AuthRoute } from "../util/route_util";

const App = () => (
  <div>
    <header>
      {/* <h1>Bench BnB App</h1> */}
      <GreetingContainer />
    </header>

    {/* Need auth and protected routes to prevent these from rendering when logged in */}
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <br></br>
    {/* <Route exact path="/" component={BenchIndexContainer} /> */}
    <Route exact path="/" component={SearchContainer} />
  </div>
);

export default App;