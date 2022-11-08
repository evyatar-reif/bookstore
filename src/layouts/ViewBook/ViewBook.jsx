import React from "react";
import "./style.css";

import defaultCover from "../../assets/defaultCover.png";
import cartIcon from "../../assets/cart-white.png";
import heartIcon from "../../assets/heartIcon.png";
import facebookIcon from "../../assets/facebookIcon.png";
import twitterIcon from "../../assets/twitterIcon.png";
import whatsappIcon from "../../assets/whatsappIcon.png";
import mailIcon from "../../assets/mailIcon.png";
import lightningIcon from "../../assets/lightningIcon.png";
import shieldIcon from "../../assets/shieldIcon.png";

const ViewBook = ({ book }) => {
  if (book == null) {
    return <h1>Not Found!</h1>;
  }
  console.log(book);
  const cover = book.imageLinks ? book.imageLinks.thumbnail : defaultCover;

  return (
    <div className='main-con'>
      <div className='book-info-con'>
        <img
          src={cover}
          alt='cover'
        />
        <div className='book-content'>
          <span>{book.title}</span>
          <div className='share-bar'>
            <button className='btn-facebook'>
              <img
                src={facebookIcon}
                alt='facebook'
              />
              Facebook
            </button>
            <button className='btn-twitter'>
              {" "}
              <img
                src={twitterIcon}
                alt='Twitter'
              />
              Twitter
            </button>
            <button className='btn-whatsapp'>
              {" "}
              <img
                src={whatsappIcon}
                alt='Whatsapp'
              />
              Whatsapp
            </button>
            <button className='btn-email'>
              {" "}
              <img
                src={mailIcon}
                alt='Email'
              />
              Email
            </button>
          </div>
          <div className='description'>{book.description}</div>
          <div className='middle-container'>
            <div className='fact-bar'>
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
            </div>
            <div className='features'>
              <div className='free-shipping'>
                <img
                  src={lightningIcon}
                  alt='free'
                />
                FREE SHIPPING
              </div>
              <div className='in-stock'>
                <img
                  src={shieldIcon}
                  alt='in stock'
                />
                IN STOCK
              </div>
            </div>
          </div>

          <hr className='line-break' />

          <div className='bottom-container'>
            <div className='price-container'>
              <span>$15.63</span>
              <span>$16.99</span>
              <div className='discount'>5%</div>
            </div>
            <div className='actions-container'>
              <div className='btn-add'>
                <img
                  src={cartIcon}
                  alt='cart'
                />
                Add to Cart
              </div>

              <div className='btn-not-favorite'>
                <img
                  src={heartIcon}
                  alt='heart'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='book-det-con'></div>
    </div>
  );
};

export default ViewBook;
