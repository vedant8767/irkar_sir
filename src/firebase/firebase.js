import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, updateDoc, serverTimestamp } from "firebase/firestore"; 
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import conf from '../conf/conf'
const firebaseConfig = {
    apiKey: conf.firebaseapiKey,
    authDomain: conf.firebaseauthDomain,
    projectId: conf.firebaseProjectId,
    storageBucket: conf.firebaseStorageBucket,
    messagingSenderId: conf.firebasemessagingSenderId,
    appId: conf.firebaseappId,
    measurementId: conf.firebasemeasurmentId
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
  