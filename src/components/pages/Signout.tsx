import * as React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import firebase from '../../firebase';

type Props = {
  updateIsLoggedIn: (isLoggedIn: boolean) => void;
};

const Signout: React.FC<Props> = props => {
  const history = useHistory();
  const [isSignoutFinished, setIsSignoutFinished] = React.useState(false);

  React.useEffect(() => {
    firebase.auth().signOut().then(() => {
      props.updateIsLoggedIn(false);
      setIsSignoutFinished(true);
    }).catch(error => {
      console.log(error);
      history.goBack();
    });
  }, [history]);

  if (isSignoutFinished) {
    return <Redirect to='/signin'/>;
  }
  return <p>Logging out...</p>;
};

export default Signout;
