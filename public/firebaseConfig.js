// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaFTcz9nHIsKebdLlYc8yayi94l3reEpY",
  authDomain: "se-phone-picker.firebaseapp.com",
  databaseURL: "https://se-phone-picker-default-rtdb.firebaseio.com",
  projectId: "se-phone-picker",
  storageBucket: "se-phone-picker.appspot.com",
  messagingSenderId: "904657103591",
  appId: "1:904657103591:web:7479e1c5827b3e790dd042",
  measurementId: "G-JTDPY67HRZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export{app, analytics};