import React from 'react';

function CharacterBox({ character }) {
  const { properties } = character;
  return (
    <li>
      <p>{properties.name}</p>
    </li>
  );
}
export default CharacterBox;
