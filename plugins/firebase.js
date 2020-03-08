import firebase from 'firebase/app';
// login機能実装用
import 'firebase/auth';
// DB機能実装用
import 'firebase/firestore';

if (!firebase.apps.length) {
  const config = {
    apiKey: "AIzaSyD3B-XYJD6nw9eApw3Oz9l6nk32UEFi0ZY",
    authDomain: "nuxt-elementui-app.firebaseapp.com",
    databaseURL: "https://nuxt-elementui-app.firebaseio.com",
    projectId: "nuxt-elementui-app",
    storageBucket: "nuxt-elementui-app.appspot.com",
    messagingSenderId: "410501943310",
    appId: "1:410501943310:web:6176870b35044f9959ac5f",
    measurementId: "G-BNWB5EYRFC"
  }
  firebase.initializeApp(config)
}

const db = firebase.firestore()
export {
 firebase,
 db
}