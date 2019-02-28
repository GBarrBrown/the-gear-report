import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBZ0oZ4bctirtCAnTojzpkZNtyCpv5a4Ao",
  authDomain: "the-gear-report.firebaseapp.com",
  databaseURL: "https://the-gear-report.firebaseio.com",
  projectId: "the-gear-report",
  storageBucket: "the-gear-report.appspot.com",
  messagingSenderId: "82460840555"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true})

export default firebase