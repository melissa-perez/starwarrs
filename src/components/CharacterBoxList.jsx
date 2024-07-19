import React from 'react';
import CharacterBox from './CharacterBox';

function CharacterBoxList({ characters }) {
  return (
    <ul className="list character-list list-items character-items">
      {characters?.map((character) => (
        <CharacterBox character={character} key={character.uid} />
      ))}
    </ul>
  );
}

export default CharacterBoxList;
