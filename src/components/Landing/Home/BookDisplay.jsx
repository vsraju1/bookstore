import React, { useState, useEffect } from "react";

import "./BookDisplay.css";

const BookDisplay = ({ books }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % books.length);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [books]);

  // const handNextBook = () => {
  //   setCurrentIndex((prevBook) => (prevBook + 1) % books.length);
  // };

  const currentBook = books[currentIndex];

  return (
    <>
          <div className="homemain">
            <div className={`homeContainer homeactive`}>
              <div className="homeDetails">
                <h1 className="homeDetails__title">{currentBook.title}</h1>
                <h3 className="homeDetails__description">{currentBook.description}</h3>
                <p className="homeDetails__author">- {currentBook.author}</p>
              </div>
              <div
                className="homePhoto"
                style={{ backgroundImage: `url(${currentBook.bookImgUrl})` }}
              ></div>
            </div>
          </div>
    </>
  );
};

export default BookDisplay;
