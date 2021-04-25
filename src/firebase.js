import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDxfI2xWbJz06qHM1BSl-Z0WBHUzqdelL4",
    authDomain: "sam-mail.firebaseapp.com",
    projectId: "sam-mail",
    storageBucket: "sam-mail.appspot.com",
    messagingSenderId: "74837645881",
    appId: "1:74837645881:web:151d1c96a525d6851a8be8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider};