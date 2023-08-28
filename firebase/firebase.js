// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore'; // Import the Firestore module

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2lVdQcTgjrczj4Sah8iMLEdAuC9SSGSo",
  authDomain: "blessed-calcos.firebaseapp.com",
  projectId: "blessed-calcos",
  storageBucket: "blessed-calcos.appspot.com",
  messagingSenderId: "426540625149",
  appId: "1:426540625149:web:4045ef21425a23abd2e294"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const bd = getFirestore(app)

export default bd;


// firebase login

//firebase init

//firebase deploy