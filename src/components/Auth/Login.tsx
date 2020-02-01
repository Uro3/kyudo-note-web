import * as React from 'react';

const Login: React.FC<{}> = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onEmailChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onPasswordChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`
      email: ${email}
      password: ${password}
    `);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={onEmailChanged} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={onPasswordChanged}/>
      </label>
      <input type="submit" value="ログイン"/>
    </form>
  );
};

export default Login;
