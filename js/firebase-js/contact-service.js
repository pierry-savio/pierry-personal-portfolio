import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";
import { db } from "./firebase.js";

export async function saveContact(name, message) {
    return await addDoc(collection(db, "contact"), {
        name,
        message,
        timestamp: serverTimestamp()
    });
}