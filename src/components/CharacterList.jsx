import React from 'react';
import CharacterBox from './CharacterBox';

function CharacterBoxList({ characters }) {
  return (
    <ul className="list list-films">
      {characters?.map((person) => (
        <CharacterBox person={person} key={person.uid} />
      ))}
    </ul>
  );
}

export default CharacterBoxList;
