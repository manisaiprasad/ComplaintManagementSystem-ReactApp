import firebase from "firebase/app"
import "firebase/auth"
import "firebase/database"


const app = firebase.initializeApp({
  apiKey: "AIzaSyDgj0_zYAcC8xmOG9CMEYi-YKe68CB9zXE",
  authDomain: "complaint-management-2184a.firebaseapp.com",
  databaseURL: "https://complaint-management-2184a-default-rtdb.firebaseio.com",
  projectId: "complaint-management-2184a",
  storageBucket: "complaint-management-2184a.appspot.com",
  messagingSenderId: "693988941268",
  appId: "1:693988941268:web:2a622eeacb1ed971120a41",
  measurementId: "G-42LG9R6F3G"
})

export const auth = app.auth()
export const db = app.database();
export default app
