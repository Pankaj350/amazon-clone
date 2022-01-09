import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCUZdb0y8pEJqDB0-axdO_IEdoqR6o2Axc",
    authDomain: "clone-33b9b.firebaseapp.com",
    projectId: "clone-33b9b",
    storageBucket: "clone-33b9b.appspot.com",
    messagingSenderId: "209211054666",
    appId: "1:209211054666:web:2050f324d0815f304c24b3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db , auth };