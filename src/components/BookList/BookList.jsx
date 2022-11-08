import React from "react";
import "./style.css";

import BookLine from "../BookLine/BookLine";

const BookList = ({ bookList }) => {
  const elements = bookList.map((b) => <BookLine book={b} />);
  return <div className='list-con'>{elements}</div>;
};

export default BookList;
