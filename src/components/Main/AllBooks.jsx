import React, { useState } from "react";
import Books from "../../assets/Books/Books";
import "./AllBooks.css";

function AllBooks() {
    const [selectedLanguage, setSelectedLanguage] = useState('all');

    const filteredBooks = selectedLanguage === 'all' ? Books : Books.filter(books => books.language === selectedLanguage)


  return (
    <div className="main__container">
        <div className="mainTitle__container">
            <div><h1 className="main__title">{selectedLanguage} Books</h1></div>
            <div className="main__filter">
                <h5>Filter by language : </h5>
                <button onClick={() => setSelectedLanguage('all')}>All</button>
                <button onClick={() => setSelectedLanguage('english')}>English</button>
                <button onClick={() => setSelectedLanguage('hindi')}>Hindi</button>
            </div>
        </div>
      
      <div className="products">
        {filteredBooks.map((item) => {
          return (
            <div key={item.id} className="product__container">
              <div className="product__img">
                <img src={item.bookImgUrl} alt="" />
              </div>
              <div className="product__details">
                <div >
                  <h3 className="product__title">{item.title}</h3>
                  <p className="product__author">- {item.author} | {item.language}</p>
                </div>
                <div className="product__desc">
                  <div>
                    <p className="product__price">₹{item.price}</p>
                  </div>
                  <div>
                    <button className="product__cartBtn">+</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllBooks;
