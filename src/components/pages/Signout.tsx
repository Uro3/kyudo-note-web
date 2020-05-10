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

  const view = isSignoutFinished
    ? <Redirect to='/signin'/>
    : <p>Logging out...</p> 

  return (
    <div>
      { view }
    </div>
  );
};

export default Signout;
