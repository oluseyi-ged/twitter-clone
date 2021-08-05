import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyB3H8-F7pqEnuh3RmzP0allGnDX6Ue1WUc",
  authDomain: "twitter-dummy.firebaseapp.com",
  projectId: "twitter-dummy",
  storageBucket: "twitter-dummy.appspot.com",
  messagingSenderId: "375891987157",
  appId: "1:375891987157:web:fba55762907815d0c6f05c",
  measurementId: "G-29SZ0TTMY1",
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db
