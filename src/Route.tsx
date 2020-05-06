import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './components/commons/Auth';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Logout from './components/pages/Logout';
import Home from './components/pages/Home';
import ScoreGroupContainer from './components/pages/ScoreGroupContainer';

const AppRoute: React.FC = () => {
  return (
    <Switch>
      <Route path='/register' component={Register}></Route>
      <Route path='/login' component={Login}></Route>
      <Route path='/logout' component={Logout}></Route>
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
