import React from 'react';

function FilmBox({ film }) {
  const { properties } = film;
  // need to do something with properties.characters(array)
  return (
    <div>
      <h3>{properties.title}</h3>
      <em>{properties.director}</em>
      <p>{properties.episode_crawl}</p>
      <p>Released: {properties.release_date}</p>
    </div>
  );
}
export default FilmBox;
