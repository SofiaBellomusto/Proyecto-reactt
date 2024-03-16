import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBb-zTu-XN-zlaznnrh3s0SqI8GhTbeoxw",
  authDomain: "coderhouse-861bb.firebaseapp.com",
  projectId: "coderhouse-861bb",
  storageBucket: "coderhouse-861bb.appspot.com",
  messagingSenderId: "907796224095",
  appId: "1:907796224095:web:839fb775bc01bd7db4e3ea"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore( app )