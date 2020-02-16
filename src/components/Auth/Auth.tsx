import * as React from 'react';
import { Redirect } from 'react-router-dom';
import firebase from '../../firebase';

type Props = {
  children: React.ReactNode;
};

const Auth: React.FC<Props> = props => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isCheckFinished, setIsCheckFinished] = React.useState(false);

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setIsLoggedIn(true);
      }
      setIsCheckFinished(true);
    });
  }, []);

  if (!isCheckFinished) {
    return <p>Checking...</p>;
  }
  if (isLoggedIn) {
    return <div>{props.children}</div>;
  }
  return (
    <Redirect to='/login' />
  );
};

export default Auth;
