import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBz4esE3yzYF2SSPCfa5pE_9-HEXkeu0uU",
  authDomain: "cat-gpt-9a161.firebaseapp.com",
  projectId: "cat-gpt-9a161",
  storageBucket: "cat-gpt-9a161.appspot.com",
  messagingSenderId: "892580420972",
  appId: "1:892580420972:web:c04ec01a536261433ea749"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};