//find
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
];
const BOOK_TITLE = "The Dream of a Ridiculous Man";
const AUTHOR = "Robert Sheckley";
// Change code below this line

const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
const bookByAuthor = books.find((book) => book.author === AUTHOR);

console.log(BOOK_TITLE); // это строка "The Dream of a Ridiculous Man"
console.log(AUTHOR); // это строка "Robert Sheckley"
console.log(bookWithTitle); // это объект книги с названием выше "The Dream of a Ridiculous Man"
console.log(bookByAuthor); // это объект книги автора "Robert Sheckley"

// hm 29

// Change code below this line
const getUserWithEmail = (users, email) => {
  return users.find((user) => user.email === email);
};
// Change code above this line
