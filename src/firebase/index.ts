import * as firebase from "firebase/app";

type ConfigParameters = {
  apiKey: string,
  projectId: string,
  senderId: string,
  appId: string,
  measurementId: string,
}

const initFirebase = (configParameters: ConfigParameters) => {
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

export {
  initFirebase
}
