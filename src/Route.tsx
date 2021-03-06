import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthCheck from '~/components/containers/AuthCheck';
import Signup from '~/components/pages/Signup';
import Signin from '~/components/pages/Signin';
import Signout from '~/components/containers/Signout';
import Home from '~/components/pages/Home';
import CreateRecord from '~/components/pages/CreateRecord';

const AppRoute: React.FC = () => {
  return (
    <Switch>
      <Route path='/signup' component={Signup}></Route>
      <Route path='/signin' component={Signin}></Route>
      <Route path='/signout' component={Signout}></Route>
      <AuthCheck requireAuth={true} redirectPath='/signin'>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/record' component={CreateRecord}></Route>
        </Switch>
      </AuthCheck>
    </Switch>
  );
};

export default AppRoute;
