import React from 'react';
import FilmBoxList from './components/FilmBoxList';
import { useSwapi } from 'react-swapi';

function App() {
  const FILM_API = 'films';
  const { data, isLoading, error } = useSwapi(FILM_API);
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {!isLoading && <FilmBoxList films={data?.result} />}
    </div>
  );
}

export default App;
