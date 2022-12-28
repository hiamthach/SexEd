import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyC-isZodwF_S91Nq0HMHcGPseDw5CC5jZA',
  authDomain: 'sxus-9a935.firebaseapp.com',
  projectId: 'sxus-9a935',
  storageBucket: 'sxus-9a935.appspot.com',
  messagingSenderId: '173156745314',
  appId: '1:173156745314:web:4aae86292ed82297e8113b',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore();
const storage = getStorage(app);

export { app, auth, db, storage };
