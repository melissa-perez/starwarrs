import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Film from './pages/Film';
import Person from './pages/Character';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Film />} />
        <Route path="characters" element={<Person />} />
      </Routes>
    </Router>
  );
}

export default App;
