import * as React from 'react';
import firebase from '../../firebase';

type Props = {
  updateIsLoggedIn: (isLoggedIn: boolean) => void;
  updateIsLoaded: (isLoaded: boolean) => void;
  children: React.ReactNode;
};

const Auth: React.FC<Props> = props => {
  React.useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);

      if (user) {
        props.updateIsLoggedIn(true);
      }
      props.updateIsLoaded(true);
    });
  }, []);

  return <div>{props.children}</div>;
};

export default Auth;
