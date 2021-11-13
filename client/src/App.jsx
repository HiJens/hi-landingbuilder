import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import { 
  Home,
  Template
} from './pages';

function App() {
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
