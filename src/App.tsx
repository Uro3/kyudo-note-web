import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { ScoreGroupContainer } from './components/ScoreGroup';
import { Auth, Register, Login, Logout } from './components/Auth';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar/>
      <section className="section">
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
      </section>
    </Router>
  );
};

export default App;
