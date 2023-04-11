import React, { useState } from 'react';
// import data from "./books.json"

import img1 from "./images/op.jpg"
import img2 from "./images/naruto.jpg"
import img3 from "./images/db.jpg"
import img4 from "./images/jjk.jpg"

const data = [
  {
    "id": 1,
    "title": "One piece",
    "author": "Eichiro Oda",
    "publisher": "TOEI Anime",
    "release_year": 1999,
    "image": img1
  },
  {
    "id": 2,
    "title": "Naruto",
    "author": "Kishimoto",
    "publisher": "Parrot",
    "release_year": 1997,
    "image": img2
  },
  {
    "id": 3,
    "title": "DragonBallZ",
    "author": "Akirotoriama",
    "publisher": "TOEI Anime",
    "release_year": 1998,
    "image": img3
  },
  {
    "id": 4,
    "title": "Jujutsukaisen",
    "author": "Eichiro Oda",
    "publisher": "Mappa",
    "release_year": 2016,
    "image": img4
  }
];

const App = () => {
  const [releaseYearFilter, setReleaseYearFilter] = useState('');
  const [publisherFilter, setPublisherFilter] = useState('');

  const handleReleaseYearChange = (event) => {
    setReleaseYearFilter(event.target.value);
  };

  const handlePublisherChange = (event) => {
    setPublisherFilter(event.target.value);
  };

  const filteredBooks = data.filter((book) => {
    if (releaseYearFilter && book.release_year !== parseInt(releaseYearFilter)) {
      return false;
    }
    if (publisherFilter && book.publisher !== publisherFilter) {
      return false;
    }
    return true;
  });

  return (
    <div>
      <h1>List of Manga</h1>
      <div>
        <label>Release Year:</label>
        <input type="text" value={releaseYearFilter} onChange={handleReleaseYearChange} />
      </div>
      <div>
        <label>Publisher:</label>
        <select value={publisherFilter} onChange={handlePublisherChange}>
          <option value="">All</option>
          <option value="Mappa">Mappa</option>
          <option value="TOEI Anime">TOEI Anime</option>
          <option value="Parrot">Parrot</option>
        </select>
      </div>
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id}>
            <img src={book.image} alt={book.title} />
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.publisher}</p>
            <p>{book.release_year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
