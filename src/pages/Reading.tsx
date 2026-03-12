// Reading.tsx

import React from 'react';
import './Reading.css';
import girlWithDragonTattoo from '../images/girl with the golden tatto.png';
import alchemist from '../images/alchemist.png';
import fireAndBlood from '../images/fire and blood.png';
import youCanWin from '../images/you can win .png';
import atomicHabits from '../images/atomic_habits.jpg';

interface Book {
  title: string;
  author: string;
  imgSrc: string;
  description: string;
  genre: string;
  pdfLink: string;
}

const favBooks: Book[] = [
  {
    title: "The Girl with a Dragon Tattoo",
    author: "Stieg Larsson",
    imgSrc: girlWithDragonTattoo,
    description: "A gripping thriller involving a journalist and a mysterious hacker who team up to solve a decades-old disappearance.",
    genre: "Thriller",
    pdfLink: "https://ebooknoid.wordpress.com/wp-content/uploads/2012/01/the_girl_with_the_dragon_tattoo.pdf"
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    imgSrc: alchemist,
    description: "A magical story about a shepherd boy who travels in search of treasure and finds something much more profound.",
    genre: "Classic",
    pdfLink: "https://icrrd.com/public/media/15-05-2021-084550The-Alchemist-Paulo-Coelho.pdf"
  },
  {
    title: "Fire & Blood",
    author: "George R.R. Martin",
    imgSrc: fireAndBlood,
    description: "The thrilling history of the Targaryens in Westeros, centuries before the events of A Game of Thrones.",
    genre: "Fantasy",
    pdfLink: "https://awoiaf.westeros.org/index.php/Fire_%26_Blood"
  },
  {
    title: "You Can Win",
    author: "Shiv Khera",
    imgSrc: youCanWin,
    description: "A construction manual for a winning attitude, providing tools and techniques to achieve success in life.",
    genre: "Self-Help",
    pdfLink: "https://vidyaprabodhinicollege.edu.in/VPCCECM/Documents/Library/Books/You%20Can%20Win.pdf"
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    imgSrc: atomicHabits,
    description: "An extremely practical and useful guide to Tiny Changes, Remarkable Results.",
    genre: "Self-Help",
    pdfLink: "https://dn790007.ca.archive.org/0/items/atomic-habits-pdfdrive/Atomic%20habits%20%28%20PDFDrive%20%29.pdf"
  }
];

const Reading: React.FC = () => {
  const handleCardClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="reading-container">
      <header className="reading-header">
        <h1 className="reading-title">Reading Collection</h1>
        <p className="reading-quote">"A reader lives a thousand lives before he dies . . . ..."</p>
      </header>

      <section className="fav-books-section">
        <h2 className="section-title">Favorite Book</h2>
        <div className="books-grid" style={{ justifyContent: 'center' }}>
          {favBooks.map((book, index) => (
            <div key={index} className="book-card" onClick={() => handleCardClick(book.pdfLink)}>
              <div className="book-cover-container">
                <img src={book.imgSrc} alt={book.title} className="book-cover" />
              </div>
              <div className="book-info">
                <h3 className="book-title">{book.title}</h3>
                <h4 className="book-author">by {book.author}</h4>
                <p className="book-description">{book.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Reading;
