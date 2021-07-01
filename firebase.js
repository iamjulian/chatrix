import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC7VxRnqKWtTc0qXFjS6iKDY1NRt9Dbx44",
  authDomain: "ja-portfolio-web.firebaseapp.com",
  projectId: "ja-portfolio-web",
  storageBucket: "ja-portfolio-web.appspot.com",
  messagingSenderId: "161403023203",
  appId: "1:161403023203:web:dfabf8663f58a1939d6d56",
  measurementId: "G-JW04GT59L7",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore().collection("apps").doc("chatrix");
const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
