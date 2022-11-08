import React from "react";

import { Link } from "react-router-dom";

import heartIcon from "../../assets/heartIcon.png";
import cartIcon from "../../assets/cartIcon.png";
import userIcon from "../../assets/userIcon.png";

const Options = () => {
  return (
    <div className='options-con'>
      <Link to='/favorite'>
        <button className='option-btn'>
          <img
            src={heartIcon}
            alt='favorites'
          />
        </button>
      </Link>
      <Link to='/cart'>
        <button className='option-btn'>
          <img
            src={cartIcon}
            alt='cart'
          />
        </button>
      </Link>
      <Link to='/user'>
        <button className='user-btn'>
          <img
            src={userIcon}
            alt='user'
          />
        </button>
      </Link>
    </div>
  );
};

export default Options;
