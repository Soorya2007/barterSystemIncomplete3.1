import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCbekvYBZfeApqETJRBtd4cLIqPLbd1OMM",
    authDomain: "bartersystemapp-d88ad.firebaseapp.com",
    projectId: "bartersystemapp-d88ad",
    storageBucket: "bartersystemapp-d88ad.appspot.com",
    messagingSenderId: "576288837660",
    appId: "1:576288837660:web:f2c3f0326183a6a8ba8fd9"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();