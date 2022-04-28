import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDeVapJbmx9iA3YPoLdSQ9Cgck3kziTyVg",
  authDomain: "recipe-directory-f3d5d.firebaseapp.com",
  projectId: "recipe-directory-f3d5d",
  storageBucket: "recipe-directory-f3d5d.appspot.com",
  messagingSenderId: "895996117060",
  appId: "1:895996117060:web:6f9a41d5037363ce50fc11",
};

// Initialize firebase
firebase.initializeApp(firebaseConfig);

// Initialize services
const projectFirestore = firebase.firestore();

export { projectFirestore };
