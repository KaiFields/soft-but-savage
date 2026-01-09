
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDqfsUhnpCXxVcj1CGSU5JV1E7PfWn108I",
  authDomain: "soft-but-savage-57084266-becf1.firebaseapp.com",
  projectId: "soft-but-savage-57084266-becf1",
  storageBucket: "soft-but-savage-57084266-becf1.appspot.com",
  messagingSenderId: "517977227122",
  appId: "1:517977227122:web:f5b31bebaef0cfc26867eb"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
export default db;
