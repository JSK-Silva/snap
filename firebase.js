import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyA-RaHvpkUQ-9f8dNkrkJp1pNUP9fo-sNs",
  authDomain: "snap-a8ada.firebaseapp.com",
  projectId: "snap-a8ada",
  storageBucket: "snap-a8ada.appspot.com",
  messagingSenderId: "73208875608",
  appId: "1:73208875608:web:dedebee851cb99bfaa182d"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = firebase.firestore()

export { firebase , db }