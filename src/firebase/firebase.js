import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, updateDoc, serverTimestamp } from "firebase/firestore"; 
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBtG8juhIlSLaYFcrWY-2rSyEqRA0qu5fw",
    authDomain: "reactpdf-9e7a0.firebaseapp.com",
    projectId: "reactpdf-9e7a0",
    storageBucket: "reactpdf-9e7a0.appspot.com",
    messagingSenderId: "484538958066",
    appId: "1:484538958066:web:11dc992a491aa645d4906b",
    measurementId: "G-ZCQ3B1XJXR"
};
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export async function getlekh(collection_name) {
    try {
        const pdfCollection = collection(db,collection_name);
        const pdfSnapshot = await getDocs(pdfCollection);
        const pdfList = pdfSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return pdfList
      } catch (error) {
        console.error('Error fetching PDF data:', error);
      }
}
  