import * as firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

type ConfigParameters = {
  apiKey: string;
  projectId: string;
  senderId: string;
  appId: string;
  measurementId: string;
};

export const initFirebase = (configParameters: ConfigParameters): void => {
  if (firebase.apps.length) {
    return;
  }

  const {apiKey, projectId, senderId, appId, measurementId} = configParameters;
  const firebaseConfig = {
    apiKey: apiKey,
    authDomain: `${projectId}.firebaseapp.com`,
    databaseURL: `https://${projectId}.firebaseio.com`,
    projectId: projectId,
    storageBucket: `${projectId}.appspot.com`,
    messagingSenderId: senderId,
    appId: appId,
    measurementId: measurementId,
  };
  firebase.initializeApp(firebaseConfig);
};

export default firebase;
