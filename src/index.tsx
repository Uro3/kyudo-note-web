import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import { initFirebase } from './firebase';
import './assets/style/bulma.scss';
import './assets/style/global.scss';

const firebaseParameters = {
  apiKey: process.env.FIREBASE_API_KEY || '',
  projectId: process.env.FIREBASE_PROJECT_ID || '',
  senderId: process.env.FIREBASE_SENDER_ID || '',
  appId: process.env.FIREBASE_APP_ID || '',
  measurementId: process.env.FIREBASE_MEASUREMENT_ID || '',
};
initFirebase(firebaseParameters);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
