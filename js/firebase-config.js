// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import {
  getFirestore,
  collection,
  query,
  where,
  orderBy,
  limit,
  getDocs,
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC9YCJlFvmjvheehAhX7Rwe3BckM9E1558",
  authDomain: "dungkae1.firebaseapp.com",
  projectId: "dungkae1",
  storageBucket: "dungkae1.firebasestorage.app",
  messagingSenderId: "390014988200",
  appId: "1:390014988200:web:c31c49ebe162c98c61b79d",
  measurementId: "G-7KTZPS260J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// Initialize Cloud Firestore and get a reference to the service

const querySnapshot = await getDocs(collection(db, "Skin"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
  });