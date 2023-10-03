import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAtreuP_R_jWSlO-zC0Dlr65YZO-bcgmM0",
    authDomain: "alita-crochet.firebaseapp.com",
    projectId: "alita-crochet",
    storageBucket: "alita-crochet.appspot.com",
    messagingSenderId: "782861770323",
    appId: "1:782861770323:web:48d9e6b59845c1c91630a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(<App />)
