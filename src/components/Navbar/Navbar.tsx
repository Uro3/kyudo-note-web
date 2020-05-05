import * as React from 'react';
import { Link } from 'react-router-dom'

const Navbar: React.FC<{}> = () => {
  const ACTIVE_CLASSNAME = 'is-active';
  const [isActive, setIsActive] = React.useState('');

  const toggleBurger = (): void => {    
    if (isActive === ACTIVE_CLASSNAME) {
      setIsActive('');
    } else {
      setIsActive(ACTIVE_CLASSNAME);
    }
  };

  const addActive = (name: string): string => {
    return name + ' ' + isActive;
  }

  return (
    <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <img src="test" alt="logo" width="112" height="28"/>
        </Link>

        <a role="button" className={addActive('navbar-burger')} aria-label="menu" aria-expanded="false" onClick={toggleBurger}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={addActive('navbar-menu')}>
        <div className="navbar-start">
          <Link to="/" className="navbar-item">Home</Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link to="/login" className="button is-primary">Login</Link>
              <Link to="/logout" className="button is-light">LOGOUT</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
