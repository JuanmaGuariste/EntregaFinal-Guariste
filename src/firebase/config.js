import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { GoogleAuthProvider, getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAlSrnTg5MZ3s0uZr2Q7fpEaunNaaLDwaY",
    authDomain: "coder-ecommerce-d61d0.firebaseapp.com",
    projectId: "coder-ecommerce-d61d0",
    storageBucket: "coder-ecommerce-d61d0.appspot.com",
    messagingSenderId: "998212804454",
    appId: "1:998212804454:web:76261069d622dd8d81b2a7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider()