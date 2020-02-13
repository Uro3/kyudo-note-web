import * as React from 'react';
import {Link} from 'react-router-dom';
import firebase from '../../firebase';

const Register: React.FC<{}> = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onEmailChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onPasswordChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <p>新規登録</p>
      <form onSubmit={onSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={onEmailChanged} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={onPasswordChanged}/>
        </label>
        <input type="submit" value="登録"/>
      </form>
      <Link to='/login'>ログイン</Link>
    </div>
  );
};

export default Register;
