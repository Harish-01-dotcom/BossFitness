// firebase.js
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: '',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'bossfitness-application',
  storageBucket: 'YOUR_BUCKET',
  messagingSenderId: '165333305017',
  appId: '1:165333305017:ios:defbcb5e03b62fa418bd68',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};
