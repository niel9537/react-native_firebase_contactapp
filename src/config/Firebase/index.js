import firebase from '@react-native-firebase/app'

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyC88_72ChiAm-C5Ry8wxbz_OtitQzjmEw0",
        authDomain: "crud-reat-native.firebaseapp.com",
        databaseURL: "https://crud-reat-native-default-rtdb.firebaseio.com",
        projectId: "crud-reat-native",
        storageBucket: "crud-reat-native.appspot.com",
        messagingSenderId: "446778564706",
        appId: "1:446778564706:web:86faf8afae93502153f13b"
    });
 }else {
    firebase.app(); // if already initialized, use that one
 }

const FIREBASE = firebase;
export default FIREBASE;

