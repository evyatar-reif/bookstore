import axios from "axios";

const API_KEY = "";

async function getBookByISBN(ISBN) {
  const URL = `https://www.googleapis.com/books/v1/volumes?q=isbn:${ISBN}&key=${API_KEY}`;

  const promiseData = await getDataPromise(URL);
  const book = promiseData.items[0].volumeInfo;
  return book;
}

async function getBookByTitle(title) {
  const URL = `https://www.googleapis.com/books/v1/volumes?q=intitle:${title}&key=${API_KEY}`;

  const promiseData = await getDataPromise(URL);
  const book = promiseData.items;
  return book;
}
async function getBookByAuthor(author) {
  const URL = `https://www.googleapis.com/books/v1/volumes?q=inauthor:${author}&key=${API_KEY}`;

  const promiseData = await getDataPromise(URL);
  const book = promiseData.items;
  return book;
}
async function getBookBySubject(subject) {
  const URL = `https://www.googleapis.com/books/v1/volumes?q=subject:${subject}&key=${API_KEY}`;

  const promiseData = await getDataPromise(URL);
  const book = promiseData.items;
  return book;
}
async function getBookByPublisher(publisher) {
  const URL = `https://www.googleapis.com/books/v1/volumes?q=inpublisher:${publisher}&key=${API_KEY}`;

  const promiseData = await getDataPromise(URL);
  const book = promiseData.items;
  return book;
}

async function getDataPromise(URL) {
  return axios.get(URL).then((response) => response.data);
}

async function getBook(type, entry) {
  console.log("searching for books...");
  switch (type) {
    case "Title": {
      const foundBooks = await getBookByTitle(entry);
      // console.log(foundBooks);
      return foundBooks;
    }
    case "Author": {
      const foundBooks = await getBookByAuthor(entry);
      // console.log(foundBooks);
      return foundBooks;
    }
    case "Subject": {
      const foundBooks = await getBookBySubject(entry);
      // console.log(foundBooks);
      return foundBooks;
    }
    case "Publisher": {
      const foundBooks = await getBookByPublisher(entry);
      // console.log(foundBooks);
      return foundBooks;
    }
    case "ISBN": {
      const foundBook = await getBookByISBN(entry);
      // console.log(foundBook);
      return foundBook;
    }
    default: {
      return [];
    }
  }
}

export { getBook };
