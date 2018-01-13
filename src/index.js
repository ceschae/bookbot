import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
var config = {
    apiKey: "AIzaSyCeO4a_enHTr_B5WlBnGbttmMhfSp9oW6o",
    authDomain: "bookbot-fun.firebaseapp.com",
    databaseURL: "https://bookbot-fun.firebaseio.com",
    projectId: "bookbot-fun",
    storageBucket: "",
    messagingSenderId: "391466523822"
};
firebase.initializeApp(config);
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
