import React from 'react';
import './Favorites.css'; // Import the CSS file for styling

const Favorites: React.FC = () => {
  return (
    <div className="favorites-container">
      <h1>My Favorites</h1>
      <div className="favorites-section">
        <h2>Music</h2>
        <p>
          Favorite Album: <strong>Abbey Road</strong> by The Beatles.
          A timeless album that blends rock and pop with unforgettable melodies and lyrics.
        </p>
        <a href="https://www.youtube.com/watch?v=oolpPmuK2I8&list=PLycVTiaj8OI-kwvNjgvvopMJt__x-y5mD" target="_blank" rel="noopener noreferrer">
          Listen on YouTube
        </a>
        <br />
        <img
          src="https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg"
          alt="Abbey Road Album"
          className="favorite-image"
        />

        <h2>Movies</h2>
        <p>
          Favorite Movie: <strong>The Matrix</strong>.
          A groundbreaking sci-fi film that explores the nature of reality and human consciousness.
        </p>
        <a href="https://www.imdb.com/title/tt0133093/" target="_blank" rel="noopener noreferrer">
          View on IMDb
        </a>
        <br />
       
      

        <h2>Shows</h2>
        <p>
          Favorite Show: <strong>Breaking Bad</strong>.
          A high school chemistry teacher turned methamphetamine kingpin in a gripping crime drama.
        </p>
        <a href="https://www.netflix.com/title/70143836" target="_blank" rel="noopener noreferrer">
          Watch on Netflix
        </a>
        <br />
       

        <h2>Books</h2>
        <p>
          Favorite Book: <strong>1984</strong> by George Orwell.
          A dystopian novel about totalitarian surveillance and the manipulation of truth.
        </p>
        <a href="https://www.goodreads.com/book/show/5470.1984" target="_blank" rel="noopener noreferrer">
          See on Goodreads
        </a>
        <br />
        <img
          src="https://images.gr-assets.com/books/1348990566l/5470.jpg"
          alt="1984 Book"
          className="favorite-image"
        />
      </div>
    </div>
  );
};

export default Favorites;
