// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUSvRIYdPM2Lpl9or-vKaP2ooNa_CHUqM",
  authDomain: "testideahacks.firebaseapp.com",
  projectId: "testideahacks",
  storageBucket: "testideahacks.appspot.com",
  messagingSenderId: "985394251376",
  appId: "1:985394251376:web:c4f5961afef4af151816b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export default db;