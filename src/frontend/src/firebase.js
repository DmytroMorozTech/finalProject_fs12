import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/firestore'

// initialize firebaseApp with firebase-config values
const firebaseConfig = {
  apiKey: 'AIzaSyB20Qy_VfdK9u4lJppIIgeoKQhIaFV3OA8',
  authDomain: 'test-458a4.firebaseapp.com',
  projectId: 'test-458a4',
  storageBucket: 'test-458a4.appspot.com',
  messagingSenderId: '255213826602',
  appId: '1:255213826602:web:d69a1200f5b8f5804d4953',
  measurementId: 'G-TG2XV1TC00'
}

let app

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app()
}

// firebase - Data-Base
const db = app.firestore()

// firebase - Storage
const storage = firebase.storage()

// firebase - Auth
const auth = firebase.auth()

// firebase -Auth Provider (Google)
const provider = new firebase.auth.GoogleAuthProvider()

export { storage, auth, provider }

export default db
