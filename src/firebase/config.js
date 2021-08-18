import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore'; 
 
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyADCEU4jhn23iQZfsgDNMM3HFQt1lV8ZOM",
    authDomain: "breadclan-firegram.firebaseapp.com",
    projectId: "breadclan-firegram",
    storageBucket: "breadclan-firegram.appspot.com",
    messagingSenderId: "165861156491",
    appId: "1:165861156491:web:4bc0698c93659b540ed68e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };