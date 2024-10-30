import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAUfqJI404HDz7rG116pwYKea1sVtOHi-E",
    authDomain: "instagram-02-95622.firebaseapp.com",
    projectId: "instagram-02-95622",
    storageBucket: "instagram-02-95622.appspot.com",
    messagingSenderId: "564415325821",
    appId: "1:564415325821:web:b92cf7cd6cd4d962d7b314"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export {app, auth, firestore, storage};