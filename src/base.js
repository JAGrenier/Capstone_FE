import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
        apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
        authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
        databaseURL: process.env.REACT_APP_FIREBASE__DATABASE,
        projectId: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
        storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
        appId: process.env.REACT_APP_FIREBASE_APP_ID,
        measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
        googleMaps: process.env.REACT_APP_GOOGLE_API_KEY
   
})

export default app;