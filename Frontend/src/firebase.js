import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBClgv9SkMxtEaLe4QEprE1o6UtxZBID3Y",
  authDomain: "ecommerce-eed1e.firebaseapp.com",
  projectId: "ecommerce-eed1e",
  storageBucket: "ecommerce-eed1e.firebasestorage.app",
  messagingSenderId: "1085533534476",
  appId: "1:1085533534476:web:c7da52539aca82cf5d3129"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
