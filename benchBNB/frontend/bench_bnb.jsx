import React from 'react';
import ReactDOM from 'react-dom';
// import createStore from './store/store';
// import Root from './components/root';
import * as Session from "./util/session_api_util"
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  window.signup = Session.signup;
  // const store = createStore();

  ReactDOM.render(<Root store={store} />, root);
})