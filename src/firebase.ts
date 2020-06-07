import * as firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';

const apiKey = process.env.FIREBASE_API_KEY || '';
const projectId = process.env.FIREBASE_PROJECT_ID || '';
const senderId = process.env.FIREBASE_SENDER_ID || '';
const appId = process.env.FIREBASE_APP_ID || '';
const measurementId = process.env.FIREBASE_MEASUREMENT_ID || '';

if (firebase.apps.length === 0) {  
  firebase.initializeApp({
    apiKey: apiKey,
    authDomain: `${projectId}.firebaseapp.com`,
    databaseURL: `https://${projectId}.firebaseio.com`,
    projectId: projectId,
    storageBucket: `${projectId}.appspot.com`,
    messagingSenderId: senderId,
    appId: appId,
    measurementId: measurementId,
  });
}

export const auth = firebase.auth();
export const functions = firebase.app().functions('asia-northeast1');

export default firebase;
