import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB5EqrZHatoYNbFnE3uMhASWSuF42LlXXg',
  authDomain: 'sexed-a21c7.firebaseapp.com',
  projectId: 'sexed-a21c7',
  storageBucket: 'sexed-a21c7.appspot.com',
  messagingSenderId: '212105412435',
  appId: '1:212105412435:web:e0f66eae204a5a54e7aba6',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
