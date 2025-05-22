// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDvw0AlQz-35UCzIWN2vcJnlgszz9UAc5Q",
  authDomain: "linkedin-clone-67e33.firebaseapp.com",
  projectId: "linkedin-clone-67e33",
  storageBucket: "linkedin-clone-67e33.appspot.com", // fixed `.app` → `.com`
  messagingSenderId: "604974006711",
  appId: "1:604974006711:web:c9622920e8e303d5d02832"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Use modular APIs
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, storage, provider };
export default db;
