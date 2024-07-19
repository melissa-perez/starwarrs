import React, { useState } from 'react';
import CharacterBox from './CharacterBox';

function CharacterBoxList({ characters }) {
  const [selectedId, setSelectedId] = useState(null);
  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }
  return (
    <ul className="list character-list list-items character-items">
      {characters?.map((character) => (
        <CharacterBox
          character={character}
          selectedId={selectedId}
          key={character.uid}
          handleCharacterClick={() => handleClick(character.uid)}
        />
      ))}
    </ul>
  );
}

export default CharacterBoxList;
