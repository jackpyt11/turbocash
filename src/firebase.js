import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDgwcpv89gRY-IUpRmwzvyQbIdY3xh3KV8",
  authDomain: "turbocash-76597.firebaseapp.com",
  projectId: "turbocash-76597",
  storageBucket: "turbocash-76597.firebasestorage.app",
  messagingSenderId: "281081255493",
  appId: "1:281081255493:web:6fa7c4f4d7f27f9f2b352c",
  measurementId: "G-4S3DGDLRZM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
let analytics;

if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, auth, db, analytics };
