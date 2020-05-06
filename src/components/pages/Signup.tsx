import * as React from 'react';
import { Link, useHistory } from 'react-router-dom';
import firebase from '../../firebase';

const Signup: React.FC<{}> = () => {
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
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // @TODO Fix
        history.push('/');
      }
    });
  }, [history]);

  return (
    <div className="container og-form-field">
      <h1 className="title is-4">新規登録</h1>
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
          <button className="button is-primary" onClick={onSubmit}>登録</button>
        </div>
      </div>
      アカウント登録済みの場合：<Link to='/signin'>サインイン</Link>
    </div>
  );
};

export default Signup;