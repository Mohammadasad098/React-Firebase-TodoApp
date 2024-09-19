import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB3SFmzco3boc11W4L4zH-rcoYUsUAkwsU",
    authDomain: "react-todoapp-84778.firebaseapp.com",
    projectId: "react-todoapp-84778",
    storageBucket: "react-todoapp-84778.appspot.com",
    messagingSenderId: "429973080610",
    appId: "1:429973080610:web:d68a60334b86387b92187b",
    measurementId: "G-2SYTQCJZS3"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);