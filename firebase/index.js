// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD4bV4eWNlJfvHqsRB8zDAUmc0UvSu77I8",
  authDomain: "fir-ec8d2.firebaseapp.com",
  projectId: "fir-ec8d2",
  storageBucket: "fir-ec8d2.appspot.com",
  messagingSenderId: "931503658940",
  appId: "1:931503658940:web:53204b4eb293cb31f0bdb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{
    db
}