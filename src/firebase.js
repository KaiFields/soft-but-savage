import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDqfsUhnpCXxVcj1CGSU5JV1E7PfWn108I",
  authDomain: "soft-but-savage-57084266-becf1.firebaseapp.com",
  projectId: "soft-but-savage-57084266-becf1",
  storageBucket: "soft-but-savage-57084266-becf1.firebasestorage.app",
  messagingSenderId: "517977227122",
  appId: "1:517977227122:web:f5b31bebaef0cfc26867eb"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
