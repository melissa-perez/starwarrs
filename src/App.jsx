import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Film from './pages/Film';
import Person from './pages/Character';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Film />} />
        <Route path="characters" element={<Person />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
