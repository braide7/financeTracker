import firebase from "firebase/app"
import 'firebase/firestore' 
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBe8sIOkaAVQ6R6hmTAZVbnfqEb7BYZOqE",
    authDomain: "mymoney-f96c4.firebaseapp.com",
    projectId: "mymoney-f96c4",
    storageBucket: "mymoney-f96c4.appspot.com",
    messagingSenderId: "514270782093",
    appId: "1:514270782093:web:1c4240ae2823d63b22b8c4"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }


