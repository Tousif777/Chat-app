import firebase from "firebase";

const fiebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAGs1GbBrDPzTop7_kNc9o_o76hdKa36eg",
  authDomain: "chat-app-46fa3.firebaseapp.com",
  projectId: "chat-app-46fa3",
  storageBucket: "chat-app-46fa3.appspot.com",
  messagingSenderId: "1080813099245",
  appId: "1:1080813099245:web:03f0f78e418aa5860d94e4",
});

const db = fiebaseApp.firestore();

export default db;
