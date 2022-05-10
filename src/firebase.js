import firebase from 'firebase/app'
import 'firebase/auth'



const firebaseConfig = {
    apiKey: "AIzaSyDosVIeHKG80X3HWC6pU1kf6T_66Zy5umc",
    authDomain: "autenticacion-pokemones.firebaseapp.com",
    projectId: "autenticacion-pokemones",
    storageBucket: "autenticacion-pokemones.appspot.com",
    messagingSenderId: "676212327426",
    appId: "1:676212327426:web:4d0d82b0aa4cc55766d31b"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const auth = firebase.auth()
  export {auth,firebase}