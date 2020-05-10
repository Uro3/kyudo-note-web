import * as React from 'react';
import { Link, useHistory  } from 'react-router-dom';
import firebase from '../../firebase';
import AuthCheck from '../containers/AuthCheck';

const Signin: React.FC<{}> = () => {
  const history = useHistory();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onEmailChanged = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  const onPasswordChanged = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  const onSubmit = async (event: React.MouseEvent): Promise<void> => {
    event.preventDefault();

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthCheck requireAuth={false} redirectPath='/record'>
      <div className="container og-form-field">
        <h1 className="title is-4">サインイン</h1>
        <div className="field">
          <label className="label">メールアドレス</label>
          <div className="control">
            <input className="input" type="email" value={email} onChange={onEmailChanged}/>
          </div>
        </div>
        <div className="field">
          <label className="label">パスワード</label>
          <div className="control">
            <input className="input" type="password" value={password} onChange={onPasswordChanged}/>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button className="button is-primary" onClick={onSubmit}>サインイン</button>
          </div>
        </div>
        アカウントがない場合：<Link to='/signup'>新規登録</Link>
      </div>
    </AuthCheck>
  );
};

export default Signin;
