import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from "@firebase/app";
import "@firebase/firestore";

/*
firebase.initializeApp({
  apiKey: "AIzaSyBTz2FtoUf5OSAFrfuHZcOtXIDUe4FzjeY",
  authDomain: "ringthegong-6053d.firebaseapp.com",
  databaseURL: "https://ringthegong-6053d.firebaseio.com",
  projectId: "ringthegong-6053d",
  storageBucket: "ringthegong-6053d.appspot.com",
  messagingSenderId: "763262754645",
  appId: "1:763262754645:web:b9b48577a84ddac484d9dc"
});
*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
