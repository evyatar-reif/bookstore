import React from "react";

import BookList from "../../components/BookList/BookList";
import defaultCover from "../../assets/defaultCover.png";

const FavoritePage = () => {
  const books = [
    {
      title: "Percy Jackson",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      price: "84.78",
      discount: 10,
      authors: ["John Adams", "Rick Riordan"],
      cover: defaultCover,
      categories: ["Adventure", "Comedy", "Drama"],
      publishedDate: "1978",
      publisher: "penguin books",
      isbn: "1978215645",
      favorite: false,
    },
    {
      title: "Percy Jackson",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      price: "84.78",
      discount: 10,
      authors: ["John Adams", "Rick Riordan"],
      cover: defaultCover,
      categories: ["Adventure", "Comedy", "Drama"],
      publishedDate: "1978",
      publisher: "penguin books",
      isbn: "1978215645",
      favorite: true,
    },
  ];
  return (
    <div>
      <BookList bookList={books} />
    </div>
  );
};

export default FavoritePage;
