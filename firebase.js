// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCtjy8Az5qlybrpsDO75AaoKsUtJsjeOok',
  authDomain: 'insta-37a2b.firebaseapp.com',
  projectId: 'insta-37a2b',
  storageBucket: 'insta-37a2b.appspot.com',
  messagingSenderId: '904865029846',
  appId: '1:904865029846:web:d1de031418d78b7071b377',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
