import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";


//firebase config 
var firebaseConfig = {
  apiKey: "AIzaSyC06S8ZJIG-rDxzhzQ61M9YtYxLkj824Yo",
  authDomain: "twitter-clone-137a3.firebaseapp.com",
  projectId: "twitter-clone-137a3",
  storageBucket: "twitter-clone-137a3.appspot.com",
  messagingSenderId: "1074569226624",
  appId: "1:1074569226624:web:93e457e227442ef3453965"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
