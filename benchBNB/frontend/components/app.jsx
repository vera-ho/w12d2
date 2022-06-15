import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";

const App = () => (
  <div>
    {/* <h1>Bench BnB App</h1> */}
    <GreetingContainer />
    <LoginFormContainer />
    <SignupFormContainer />
  </div>
);

export default App;