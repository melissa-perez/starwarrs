import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { useSwapi } from 'react-swapi';

import Film from './pages/Film';
import Person from './pages/Person';
import PageNotFound from './pages/PageNotFound';

function App() {
  //const FILM_API = 'films';
  //const { data, isLoading, error } = useSwapi(FILM_API);
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
/*<div>
  {isLoading && <p>Loading...</p>}
  {error && <p>Error: {error.message}</p>}
  {!isLoading && <FilmBoxList films={data?.result} />}
</div>;*/
