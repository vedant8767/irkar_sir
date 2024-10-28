const conf = {
    firebaseapiKey: String(import.meta.env.VITE_FIREBASE_APIKEY),
    firebaseauthDomain: String(import.meta.env.VITE_FIREBASE_AUTHDOMAIN),
    firebaseProjectId: String(import.meta.env.VITE_FIREBASE_PROJECTID),
    firebaseStorageBucket: String(import.meta.env.VITE_FIREBASE_STORAGEBUCKET),
    firebasemessagingSenderId: String(import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID),
    firebaseappId:String(import.meta.env.VITE_FIREBASE_APPID),
    firebasemeasurmentId:String(import.meta.env.VITE_FIREBASE_MEASURMENTID),
}

export default conf