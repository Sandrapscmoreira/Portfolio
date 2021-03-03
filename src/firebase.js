import firebase from 'firebase'

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyASgnTWySvHXqgufe9-3goQ8c2bY-d9ANQ",
    authDomain: "react-firebase-7eacf.firebaseapp.com",
    projectId: "react-firebase-7eacf",
    storageBucket: "react-firebase-7eacf.appspot.com",
    messagingSenderId: "805371596354",
    appId: "1:805371596354:web:e08a93b1343a2643e1a7db",
    measurementId: "G-MGHREDZF1W"
});


var db = firebaseApp.firestore();

export { db }