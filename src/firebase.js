import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLAuYClIvC2Qpx7gLwjhwVrppJwFcm5fE",
  authDomain: "kypcastler.firebaseapp.com",
  databaseURL: "https://kypcastler-default-rtdb.firebaseio.com",
  projectId: "kypcastler",
  storageBucket: "kypcastler.appspot.com",
  messagingSenderId: "1003634421401",
  appId: "1:1003634421401:web:9c394d7f30eac420a55208",
  measurementId: "G-9T6HS80992"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;