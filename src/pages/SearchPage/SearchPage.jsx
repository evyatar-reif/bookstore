import React, { useState, useEffect } from "react";
import "./style.css";

import { useParams, Link } from "react-router-dom";
import { getBook } from "../../utils/booksApi";

import ViewBook from "../../layouts/ViewBook/ViewBook";

const SearchPage = () => {
  const { type, entry } = useParams();
  const [books, setBooks] = useState(null);

  async function searchBook() {
    const resultBook = await getBook(type, entry);
    if (resultBook) {
      setBooks([resultBook]);
    } else {
      alert("No book found");
    }
  }

  useEffect(() => {
    searchBook();
  }, [type, entry]);

  const elements = () => {
    if (books) {
      if (type == "ISBN") {
        return <ViewBook book={books[0]} />;
      }
      if (type == "Title") {
        return <h1>Title</h1>;
      }
    } else {
      return <h1>Searching...</h1>;
    }
  };
  return <div className='main-container'>{elements()}</div>;
};

export default SearchPage;
