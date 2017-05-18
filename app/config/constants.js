import firebase from 'firebase'

 // Initialize Firebase
const config = {
  apiKey: 'AIzaSyBTitr5bo2kQENy4qWH7s1esrt9Sfl9v4o',
  authDomain: 'ducker-5caf3.firebaseapp.com',
  databaseURL: 'https://ducker-5caf3.firebaseio.com',
  projectId: 'ducker-5caf3',
  storageBucket: 'ducker-5caf3.appspot.com',
  messagingSenderId: '418487180687',
}
firebase.initializeApp(config)


export const ref = firebase.database().ref()

export const firebaseAuth = firebase.auth
