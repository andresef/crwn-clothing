import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCL1ktrYHCzvfGOaZ8tLZ7Atk1XfCWcUa0",
  authDomain: "crwn-db-57979.firebaseapp.com",
  projectId: "crwn-db-57979",
  storageBucket: "crwn-db-57979.appspot.com",
  messagingSenderId: "737085789919",
  appId: "1:737085789919:web:4aedb3fd8a58441896bb6a"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;