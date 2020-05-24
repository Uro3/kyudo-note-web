import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Auth from './components/containers/Auth';
import Navbar from './components/containers/Navbar';
import Route from './Route';

const App: React.FC = () => {
  return (
    <Auth>
      <BrowserRouter>
        <Navbar />
        <section className="section">
          <Route />
        </section>
      </BrowserRouter>
    </Auth>
  );
};

export default App;
