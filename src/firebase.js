import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAwlcV3hdbGY9yPZ9KDxO1zx0UmiP9rct8",
  authDomain: "fir-2fd7c.firebaseapp.com",
  projectId: "fir-2fd7c",
  storageBucket: "fir-2fd7c.appspot.com",
  messagingSenderId: "506989400423",
  appId: "1:506989400423:web:1a59eb8ad5f24c722e1fc2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };