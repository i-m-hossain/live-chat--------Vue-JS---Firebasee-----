// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBpfF-V2HIxXKxTo_h4LMFDL01ChdWl5uQ",
  authDomain: "net-ninja-vue-project.firebaseapp.com",
  databaseURL: "https://net-ninja-vue-project-default-rtdb.firebaseio.com",
  projectId: "net-ninja-vue-project",
  storageBucket: "net-ninja-vue-project.appspot.com",
  messagingSenderId: "54603329231",
  appId: "1:54603329231:web:dbae388077bbf0ff16d1ba",
  measurementId: "G-D9ZXNT5VRC"
}; 


//init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }