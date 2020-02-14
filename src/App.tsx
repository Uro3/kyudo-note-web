import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import {Home} from './components/Home';
import {ScoreGroupContainer} from './components/ScoreGroup';
import {Auth, Login, Register} from './components/Auth';

const App: React.FC = () => {
  return (
    <Router>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/login">LOGIN</Link></li>
      </ul>
      <hr/>
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/register' component={Register}></Route>
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
