import * as React from 'react';
import {Link} from 'react-router-dom'

const Login: React.FC<{}> = () => {
  return (
    <ul>
      <li>
        <Link to="/record">記録する</Link>
      </li>
    </ul>
  );
};

export default Login;
