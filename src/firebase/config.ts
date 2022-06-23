import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

firebase.initializeApp({
  apiKey: 'AIzaSyDz1JtZrNbM0ViIcVJOQs7Y0HvTb8Nc6jo',
  authDomain: 'ticket-c2600.firebaseapp.com',
  projectId: 'ticket-c2600',
  storageBucket: 'ticket-c2600.appspot.com',
  messagingSenderId: '749135443423',
  appId: '1:749135443423:web:131c166e2cd91ab1a0006a',
  measurementId: 'G-0JT0N9V8TX',
});

// Initialize Firebase
const db = firebase.firestore();
export default db;
