import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvD_g3A7A-t0x5J2az0Ax4dHK481NaNnQ",
  authDomain: "jobs-app-22866.firebaseapp.com",
  projectId: "jobs-app-22866",
  storageBucket: "jobs-app-22866.appspot.com",
  messagingSenderId: "152231171704",
  appId: "1:152231171704:web:3b3319c0b62947ac29bf8d",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { db, app };
