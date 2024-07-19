import React from 'react';

function CharacterBox({ character, selectedId, handleCharacterClick }) {
  const { name } = character;
  return (
    <li className={character.uid === selectedId ? 'selected' : 'unselected'} onClick={handleCharacterClick}>
      <h1>{character.uid === selectedId ? 'aaa' : name}</h1>
    </li>
  );
}
export default CharacterBox;
