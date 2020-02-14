import * as React from 'react';
import {Redirect, useHistory} from 'react-router-dom';
import firebase from '../../firebase';

const Logout: React.FC<{}> = () => {
  const history = useHistory();
  const [isLogoutFinished, setIsLogoutFinished] = React.useState(false);

  firebase.auth().signOut().then(() => {
    setIsLogoutFinished(true);
  }).catch(error => {
    console.log(error);
    history.goBack();
  });

  const view = isLogoutFinished
    ? <Redirect to='/login'/>
    : <p>Logging out...</p> 

  return (
    <div>
      { view }
    </div>
  );
};

export default Logout;
