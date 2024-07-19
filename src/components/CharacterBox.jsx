import React from 'react';
function CharacterBox({ character }) {
  const { name } = character;
  return (
    <li className="unselected">
      <h1>{name}</h1>
    </li>
  );
}
export default CharacterBox;
