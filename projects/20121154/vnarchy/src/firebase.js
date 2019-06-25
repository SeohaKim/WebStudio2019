import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyAALohDwpQIG2cpU7D-Uej7RGcfTjKSGsQ",
    authDomain: "boardgame-7e9ab.firebaseapp.com",
    databaseURL: "https://boardgame-7e9ab.firebaseio.com",
    projectId: "boardgame-7e9ab",
    storageBucket: "",
    messagingSenderId: "899642634770",
    appId: "1:899642634770:web:e7f5d586a64a11c4"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()

export const auth = firebase.auth()
export const provider = new firebase.auth.GoogleAuthProvider();