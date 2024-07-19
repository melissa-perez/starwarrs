import React from 'react';
import CharacterBox from './CharacterBox';

function CharacterBoxList({ characters }) {
  return (
    <ul className="list list-items">
      {characters?.map((character) => (
        <CharacterBox character={character} key={character.uid} />
      ))}
    </ul>
  );
}

export default CharacterBoxList;
