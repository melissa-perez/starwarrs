import React from 'react';

function FilmBox({ film }) {
  const { properties } = film;
  return (
    <li>
      <h3>{properties.title}</h3>
      <h4>Episode {properties.episode_id}</h4>
      <em>Director: {properties.director}</em>
      <p>{properties.opening_crawl}</p>
      <p>Released: {properties.release_date}</p>
    </li>
  );
}
export default FilmBox;
