import * as React from 'react';
import { Redirect } from 'react-router-dom';

type Props = {
  isLoggedIn: boolean;
  requireAuth: boolean;
  redirectPath: string;
  children: React.ReactNode;
};

const AuthCheck: React.FC<Props> = props => {  
  if (props.isLoggedIn === props.requireAuth) {
    return <div>{props.children}</div>;
  }
  return (
    <Redirect to={props.redirectPath} />
  );
};

export default AuthCheck;
