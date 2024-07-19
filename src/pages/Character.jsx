import { useSwapi } from 'react-swapi';

import Navigation from '../components/Navigation';
import CharacterBoxList from '../components/CharacterBoxList';

function Character() {
  const FILM_API = 'people';
  const { data, isLoading, error } = useSwapi(FILM_API);

  return (
    <main className={'app'}>
      <Navigation />
      <div>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {!isLoading && <CharacterBoxList characters={data?.results} />}
      </div>
    </main>
  );
}

export default Character;
