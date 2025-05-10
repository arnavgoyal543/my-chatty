import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8aZDvHthUikdoJr2n-_QCXN3P3Ae0q-0",
  authDomain: "mychatty-95cdf.firebaseapp.com",
  projectId: "mychatty-95cdf",
  storageBucket: "mychatty-95cdf.firebasestorage.app",
  messagingSenderId: "356880043016",
  appId: "1:356880043016:web:2b8fffea05f0c5c8bb95bd",
  measurementId: "G-SDQ4YS5F3J"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const provider = new GoogleAuthProvider();

export { db, provider };
