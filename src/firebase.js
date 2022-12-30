// import firebase from "firebase/app";
// import "firebase/firestore";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// import * as firebase from 'firebase';
// require('firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyDvta7aPmNSJ4QA9UP_OV7vdkLk9fimRSw",
    authDomain: "eshop-6c8f5.firebaseapp.com",
    projectId: "eshop-6c8f5",
    storageBucket: "eshop-6c8f5.appspot.com",
    messagingSenderId: "570589661842",
    appId: "1:570589661842:web:b4889e8f67eceb36b1744b",
    measurementId: "G-F5JE5ESZNQ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};