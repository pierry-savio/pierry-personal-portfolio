
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDmAjZMT8KlzPTsqWO7TDpimivUJVKk2wI",
    authDomain: "pierry-porfolio.firebaseapp.com",
    projectId: "pierry-porfolio",
    storageBucket: "pierry-porfolio.firebasestorage.app",
    messagingSenderId: "1063606860123",
    appId: "1:1063606860123:web:b8e8dcad99ff59984d427e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
