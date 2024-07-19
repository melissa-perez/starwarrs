import { useSwapi } from 'react-swapi';

import Navigation from '../components/Navigation';
import FilmBoxList from '../components/FilmBoxList';

function Film() {
  const FILM_API = 'films';
  const { data, isLoading, error } = useSwapi(FILM_API);
  return (
    <main className={'app'}>
      <Navigation />
      <div>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {!isLoading && <FilmBoxList films={data?.result} />}
      </div>
    </main>
  );
}

export default Film;
