import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";

import SearchBar from "./SearchBar";
import Options from "./Options";

const Header = ({ openDropdown, setOpenDropdown }) => {
  return (
    <header className='header-con'>
      <Link to='/'>
        <img
          src={logo}
          alt='logo'
        />
      </Link>
      <SearchBar
        openDropdown={openDropdown}
        setOpenDropdown={setOpenDropdown}
      />
      <Options />
    </header>
  );
};

export default Header;
