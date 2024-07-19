import React from 'react';

function CharacterBox({ character }) {
  const { name, url } = character;
  return (
    <li>
      <p>{name}</p>
    </li>
  );
}
export default CharacterBox;
