import React from "react";
import "./style.css";
import cartIcon from "../../assets/cart-white.png";
import heartIcon from "../../assets/heartIcon.png";
import WhiteHeartIcon from "../../assets/heart-white.png";

const BookLine = ({ book }) => {
  const categoriesElements = book.categories.map((a) => <span>{a}, </span>);

  return (
    <div className='book-con'>
      <img
        className='cover'
        src={book.cover}
        alt='cover'
      />
      <div className='book-content'>
        <div className='book-top'>
          <span className='title'>{book.title}</span>
          <span className='isbn'>{book.isbn}</span>
        </div>
        <span className='categories'>{categoriesElements}</span>
        <p className='description'>"{book.description}"</p>
        <div className='price-con'>
          <span>${book.price - (book.price * book.discount) / 100}</span>
          <span>${book.price}</span>
        </div>
        <div className='book-bottom'>
          <div className='book-fact'>
            <span>Written By</span>
            <span>{book.authors[0]}</span>
          </div>
          <div className='book-fact'>
            <span>Publisher</span>
            <span>{book.publisher}</span>
          </div>
          <div className='book-fact'>
            <span>Year</span>
            <span>{book.publishedDate}</span>
          </div>
          <div className='book-actions'>
            <div className='btn-add'>
              <img
                src={cartIcon}
                alt='cart'
              />
              Add to Cart
            </div>
            {book.favorite ? (
              <div className='btn-not-favorite'>
                <img
                  src={heartIcon}
                  alt='heart'
                />
              </div>
            ) : (
              <div className='btn-favorite'>
                <img
                  src={WhiteHeartIcon}
                  alt='heart'
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookLine;
