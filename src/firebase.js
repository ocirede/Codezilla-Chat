import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApqylzrD4e-txtBnDWHkTpLoByD6zKLDE",
  authDomain: "real-time-chat-34c1a.firebaseapp.com",
  databaseURL: "https://real-time-chat-34c1a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "real-time-chat-34c1a",
  storageBucket: "real-time-chat-34c1a.appspot.com",
  messagingSenderId: "725668535725",
  appId: "1:725668535725:web:678ae5038000864ffb5524",
  databaseUrl: "https://real-time-chat-34c1a-default-rtdb.europe-west1.firebasedatabase.app/"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
