import React from 'react';
import './Music.css';
import albumCoverTLT from '../images/alas ka pedh.png'; // Aalas Ka Pedh by The Local Train
import albumCoverParachutes from '../images/parachutes.png'; // Parachutes by Coldplay
import albumCoverCrush from '../images/crush.png'; // Crush by Bon Jovi
import albumCoverNeendein from '../images/neendein.png'; // Neendein by Mitraz

const favoriteGenres = [
  { name: "Rock", link: "https://open.spotify.com/genre/0JQ5DAqbMKFDXXwE9BDJAr" },
  { name: "Indie", link: "https://open.spotify.com/genre/0JQ5DAqbMKFCWjUTdzaG0e" },
  { name: "Jazz", link: "https://open.spotify.com/genre/0JQ5DAqbMKFAJ5xb0fwo9m" },
  { name: "Blues", link: "https://open.spotify.com/genre/0JQ5DAqbMKFQiK2EHwyjcU" },
  { name: "R&B", link: "https://open.spotify.com/genre/0JQ5DAqbMKFEZPnFQSFB1T" }
];
const favoriteAlbums = [
  { title: "Aalas Ka Pedh", artist: "The Local Train", imgSrc: albumCoverTLT, link: "https://open.spotify.com/artist/7b6Ui7JVaBDEfZB9k6nHL0" },
  { title: "Parachutes", artist: "Coldplay", imgSrc: albumCoverParachutes, link: "https://open.spotify.com/album/6ZG5lRT77aJ3btmArcykra" },
  { title: "Crush", artist: "Bon Jovi", imgSrc: albumCoverCrush, link: "https://open.spotify.com/album/0Q9SljCrM0CL0bR23MuP69" },
  { title: "Neendein", artist: "Mitraz", imgSrc: albumCoverNeendein, link: "https://open.spotify.com/album/2duQj52ixWnH9cppsg7e63" },
];


const Music: React.FC = () => {
  return (
    <div className="music-page">
      <div className="quote">
        <p>“Rock and Roll isn’t a genre, it’s a way of life.” 🎸</p>
      </div>

      <div className="genre-section">
        <h3>Explore by Genre</h3>
        <div className="genres">
          {favoriteGenres.map((genre, index) => (
            <a key={index} href={genre.link} target={genre.link !== "#" ? "_blank" : undefined} rel={genre.link !== "#" ? "noopener noreferrer" : undefined} className="album-link">
              <div className="genre-card" style={{ animationDelay: `${index * 0.2}s` }}>
                <p>{genre.name}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="albums-section">
        <h3>Favorite Albums</h3>
        <div className="albums">
          {favoriteAlbums.map((album, index) => (
            <a key={index} href={album.link} target="_blank" rel="noopener noreferrer" className="album-link">
              <div className="album-card" style={{ animationDelay: `${index * 0.3}s` }}>
                <img src={album.imgSrc} alt={album.title} className="album-image" />
                <div className="album-details">
                  <h4>{album.title}</h4>
                  <p>by {album.artist}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Music;
