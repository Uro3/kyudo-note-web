import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import {ScoreGroupContainer} from './components/ScoreGroup';
import {Login} from './components/Auth';

const App: React.FC = () => {
  return (
    <Router>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/login">LOGIN</Link></li>
      </ul>
      <hr/>
      <Switch>
        <Route exact path='/' component={ScoreGroupContainer}></Route>
        <Route path='/login' component={Login}></Route>
      </Switch>
    </Router>
  );
};

export default App;
