import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCM1lyMWSbH5exMUE0uZ2eqklM17S14_LA",
  authDomain: "instagramclone-cc94e.firebaseapp.com",
  projectId: "instagramclone-cc94e",
  storageBucket: "instagramclone-cc94e.appspot.com",
  messagingSenderId: "94996434965",
  appId: "1:94996434965:web:a39d9ee39e6074ae5a3e1c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export {app, auth, firestore, storage};