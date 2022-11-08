import React, { useState } from "react";
import "./menu_style.css";
import menusIcon from "../../assets/menusIcon.png";
import searchIcon from "../../assets/searchIcon.png";

const SearchBar = ({ openDropdown, setOpenDropdown }) => {
  const [type, setType] = useState("Title");
  const [entry, setEntry] = useState("");

  function handleSearch() {}
  return (
    <div className='searchbar-con'>
      <div className='dropdown'>
        <div className='type-con'>
          <img
            src={menusIcon}
            alt='menus'
          />
          <div
            className='select'
            onClick={() => setOpenDropdown(true)}>
            <span className='selected'>{type}</span>
            <div className='caret'></div>
          </div>
          <ul
            className={openDropdown ? "menu" : "menu-close"}
            onClick={(e) => {
              if (e.target.id) {
                setType(e.target.id);
                setOpenDropdown(false);
              }
            }}>
            <li id='Title'>Title</li>
            <li id='Author'>Author</li>
            <li id='Subject'>Subject</li>
            <li id='Publisher'>Publisher</li>
            <li id='ISBN'>ISBN</li>
          </ul>
        </div>
      </div>
      <input
        onChange={(e) => setEntry(e.target.value)}
        id='search'
        value={entry}
        placeholder='Search over 30 million book titles'
      />
      <div
        className='search-con'
        onClick={handleSearch}>
        <img
          src={searchIcon}
          alt='search'
        />
      </div>
    </div>
  );
};

export default SearchBar;
