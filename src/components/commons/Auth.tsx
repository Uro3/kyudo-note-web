import * as React from 'react';
import firebase from '../../firebase';

type Props = {
  isLoaded: boolean;
  updateIsLoggedIn: (isLoggedIn: boolean) => void;
  updateIsLoaded: (isLoaded: boolean) => void;
  children: React.ReactNode;
};

const Auth: React.FC<Props> = props => {
  React.useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        props.updateIsLoggedIn(true);
      }
      props.updateIsLoaded(true);
    });
  }, []);

  if (!props.isLoaded) {
    return <p>Checking...</p>;
  }
  return <div>{props.children}</div>;
};

export default Auth;
