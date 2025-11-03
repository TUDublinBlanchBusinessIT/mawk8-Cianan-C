import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  "projectId": "mawk8cianan",
  "appId": "1:105859300929:web:9b8743734c123553abd0c0",
  "storageBucket": "mawk8cianan.firebasestorage.app",
  "apiKey": "AIzaSyD3gYvP0wVZJJtWpUhU14gO-tVAAsifGBw",
  "authDomain": "mawk8cianan.firebaseapp.com",
  "messagingSenderId": "105859300929",
  "projectNumber": "105859300929",
  "version": "2"
}

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);