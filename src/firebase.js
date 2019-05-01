import firebase from 'firebase/app'
import 'firebase/firestore'

var config = {
    apiKey: "AIzaSyA-kdolyJABUBhCF7cab3vA901PVqjw7h4",
    authDomain: "bookturf-4477b.firebaseapp.com",
    databaseURL: "https://bookturf-4477b.firebaseio.com",
    projectId: "bookturf-4477b",
    storageBucket: "bookturf-4477b.appspot.com",
    messagingSenderId: "554391459137"
  };
  firebase.initializeApp(config);

const db=firebase.firestore();

export default db;