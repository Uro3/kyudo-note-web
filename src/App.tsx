import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Home } from './components/Home';
import { ScoreGroupContainer } from './components/ScoreGroup';
import { Auth, Register, Login, Logout } from './components/Auth';

const App: React.FC = () => {
  return (
    <Router>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/login">LOGIN</Link></li>
        <li><Link to="/logout">LOGOUT</Link></li>
      </ul>
      <hr/>
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
    </Router>
  );
};

export default App;
