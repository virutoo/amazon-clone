import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9sZo99uXq-iKlcFhUw6ibgnDmYgvaxss",
  authDomain: "clone-105c8.firebaseapp.com",
  projectId: "clone-105c8",
  storageBucket: "clone-105c8.appspot.com",
  messagingSenderId: "351830960509",
  appId: "1:351830960509:web:1d712ae7fe690e81610414",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth, collection, addDoc };
