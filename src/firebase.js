import firebase from 'firebase/app';
var firebaseConfig = {
    // credentials from firebase should go here
    // https://firebase.google.com/docs/web/setup
  };
const Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase;