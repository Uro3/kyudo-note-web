import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './components/commons/Auth';
import Signup from './components/pages/Signup';
import Signin from './components/pages/Signin';
import Signout from './components/pages/Signout';
import Home from './components/pages/Home';
import ScoreGroupContainer from './components/pages/ScoreGroupContainer';

const AppRoute: React.FC = () => {
  return (
    <Switch>
      <Route path='/signup' component={Signup}></Route>
      <Route path='/signin' component={Signin}></Route>
      <Route path='/signout' component={Signout}></Route>
      <Auth>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/record' component={ScoreGroupContainer}></Route>
        </Switch>
      </Auth>
    </Switch>
  );
};

export default AppRoute;
