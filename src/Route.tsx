import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Cirtified from './components/commons/Cirtified';
import Signup from './components/pages/Signup';
import Signin from './components/pages/Signin';
import Signout from './components/pages/Signout';
import Home from './components/pages/Home';
import CreateRecord from './components/pages/CreateRecord';

const AppRoute: React.FC = () => {
  return (
    <Switch>
      <Route path='/signup' component={Signup}></Route>
      <Route path='/signin' component={Signin}></Route>
      <Route path='/signout' component={Signout}></Route>
      <Cirtified>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/record' component={CreateRecord}></Route>
        </Switch>
      </Cirtified>
    </Switch>
  );
};

export default AppRoute;
