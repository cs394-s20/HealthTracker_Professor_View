import firebase from 'firebase/app';
var firebaseConfig = {
<<<<<<< HEAD
    // credentials from firebase should go here
    // https://firebase.google.com/docs/web/setup
=======
    apiKey: "your apiKey",
    authDomain: "your authDomain",
    databaseURL: "your databaseURL",
    projectId: "your projectId",
    storageBucket: "your storageBucket",
    messagingSenderId: "your messagingSenderId",
    appId: "your appId"
>>>>>>> db74a6a3e9986ba251937b15db5767c04b28a277
  };
const Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase;