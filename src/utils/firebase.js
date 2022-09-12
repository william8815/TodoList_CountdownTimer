// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDi0fpNUdGRYRZyyXCOPVxvnyKKtwGyEBs",
  authDomain: "todolist-62714.firebaseapp.com",
  databaseURL:
    "https://todolist-62714-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "todolist-62714",
  storageBucket: "todolist-62714.appspot.com",
  messagingSenderId: "149095616511",
  appId: "1:149095616511:web:9078c54069a488cb13e1ca",
  measurementId: "G-QX4ZNCXMSW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
