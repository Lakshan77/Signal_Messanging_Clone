import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB_JVO3PrXLJRhb_5yYUsIAU51C_tF_jpw",
    authDomain: "signaldemo-79260.firebaseapp.com",
    projectId: "signaldemo-79260",
    storageBucket: "signaldemo-79260.appspot.com",
    messagingSenderId: "431425682944",
    appId: "1:431425682944:web:90c1004b23d3733ea5a2e5"
  };

let app;

if (firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig);
}else{
  app = firebase.app();
}

const db = app.firestore();
const auth = app.auth();

export {db, auth};
