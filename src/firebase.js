import firebase from 'firebase';
// import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBtgvBfLvVfnwB6HozYQXljopFKfGK1EU0",
    authDomain: "netflix-clone-92c18.firebaseapp.com",
    projectId: "netflix-clone-92c18",
    storageBucket: "netflix-clone-92c18.appspot.com",
    messagingSenderId: "446197332613",
    appId: "1:446197332613:web:15235937f7daf9009087ec"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = firebase.firestore();

export default auth;
export { db };

