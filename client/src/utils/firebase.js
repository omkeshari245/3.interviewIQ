
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-3e8a6.firebaseapp.com",
  projectId: "interviewiq-3e8a6",
  storageBucket: "interviewiq-3e8a6.firebasestorage.app",
  messagingSenderId: "105086074329",
  appId: "1:105086074329:web:11ff2b39fa164ce0286dc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth,provider}