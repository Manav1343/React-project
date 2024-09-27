
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDl6EuKnfgcnTUwAOhHw1iGEr6lAS3M6vc",
  authDomain: "auth-ff695.firebaseapp.com",
  projectId: "auth-ff695",
  storageBucket: "auth-ff695.appspot.com",
  messagingSenderId: "621201190179",
  appId: "1:621201190179:web:520be6dc18c41c4fc53096"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth }