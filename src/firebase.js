import firebase from "firebase/app";
import "firebase/database";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBdtm0K-FLPVbzRG-D_OdCFpCdejNgAi3A",

  authDomain: "project-1ed40.firebaseapp.com",

  projectId: "project-1ed40",

  storageBucket: "project-1ed40.appspot.com",

  messagingSenderId: "23701854762",

  appId: "1:23701854762:web:beee013c8846a0aecc0153",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
