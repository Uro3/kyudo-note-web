import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/commons/Navbar';
import Route from './Route';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <section className="section">
        <Route />
      </section>
    </BrowserRouter>
  );
};

export default App;
