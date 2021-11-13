import React, { useEffect } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import { 
  Home,
  Template
} from './pages';

import AOS from 'aos';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, []);

  return (
    <Router>
      <Routes>
        <Route 
          path="/"
          element={<Home />}
        />

        <Route 
          path="/:firm/:slug"
          element={<Template />}
        />
      </Routes>
    </Router>
  );
}

export default App;
