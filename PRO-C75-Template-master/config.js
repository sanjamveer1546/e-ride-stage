import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCdRgcbqnHjhyNQ3c1L3FX8dmqlxOr_7Mk",
  authDomain: "e-ride-stage-b97b0.firebaseapp.com",
  projectId: "e-ride-stage-b97b0",
  storageBucket: "e-ride-stage-b97b0.appspot.com",
  messagingSenderId: "677368273115",
  appId: "1:677368273115:web:4bbe4f206f8500c40754fe"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
