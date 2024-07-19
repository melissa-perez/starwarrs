import React from 'react';
import FilmBox from './FilmBox';

function FilmBoxList({ films }) {
  return (
    <ul className="list list-items">
      {films?.map((film) => (
        <FilmBox film={film} key={film._id} />
      ))}
    </ul>
  );
}

export default FilmBoxList;
