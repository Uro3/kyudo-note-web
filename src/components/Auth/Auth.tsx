import * as React from 'react';
import {Redirect} from 'react-router-dom';
import firebase from '../../firebase';

type Props = {
  children: React.ReactNode,
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

  let view;
  if (isCheckFinished) {
    if (isLoggedIn) {
      view = props.children;
    } else {
      view = <Redirect to='/login' />;
    }
  } else {
    view = <p>Checking...</p>;
  }

  return (
    <div>
      { view }
    </div>
  );
};

export default Auth;