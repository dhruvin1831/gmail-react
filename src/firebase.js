import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCm4BELa2is0xKj1gqVDypokpE-sK8CLrk",
  authDomain: "clone-9d6d5.firebaseapp.com",
  projectId: "clone-9d6d5",
  storageBucket: "clone-9d6d5.appspot.com",
  messagingSenderId: "486280367319",
  appId: "1:486280367319:web:6ee29f97849da637a17492",
  measurementId: "G-S352SNDGTB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
