import * as React from 'react';
import { Redirect } from 'react-router-dom';

type Props = {
  isLoggedIn: boolean;
  children: React.ReactNode;
};

const Cirtified: React.FC<Props> = props => {
  if (props.isLoggedIn) {
    return <div>{props.children}</div>;
  }
  return (
    <Redirect to='/signin' />
  );
};

export default Cirtified;
