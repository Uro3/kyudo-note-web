import * as React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import firebase from '../../firebase';

const Signout: React.FC<{}> = () => {
  const history = useHistory();
  const [isSignoutFinished, setIsSignoutFinished] = React.useState(false);

  React.useEffect(() => {
    firebase.auth().signOut().then(() => {
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
