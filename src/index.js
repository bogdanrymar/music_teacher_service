import React, { createContext } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Initialize Firebase
const app = firebase.initializeApp(
  {
    apiKey: "AIzaSyB17E0UCRvxBA-sCBTrXAV2OB5P1LUCSnk",
    authDomain: "music-teacher-service.firebaseapp.com",
    projectId: "music-teacher-service",
    storageBucket: "music-teacher-service.appspot.com",
    messagingSenderId: "743660541709",
    appId: "1:743660541709:web:38c2b1e4f6f5287f670244"
  }
);

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()

ReactDOM.render(
  <Context.Provider value={{
    firebase,
    auth,
    firestore
  }}>
    <App />
  </Context.Provider>,
  document.getElementById("root")
);
