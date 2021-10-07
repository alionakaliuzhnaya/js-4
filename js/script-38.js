//Дополни код так, чтобы в переменной ascendingReleaseDates получилась
//отсортированная по возрастанию копия массива releaseDates,
//    а в переменной alphabeticalAuthors копия массива имён авторов authors отсортированная в по алфавиту.
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
];
// Change code below this line

const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort();

console.log(releaseDates); // это массив[2016, 1967, 2008, 1984, 1973, 2012, 1997]
console.log(authors); // это массив["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky"]
console.log(alphabeticalAuthors); // это массив ["Bernard Cornwell", "Tanith Lee", "Robert Sheckley", "Fyodor Dostoevsky"]

//hm43

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
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
// Change code below this line

const sortedByAuthorName = [...books].sort((firstAuthor, secondAuthor) =>
  firstAuthor.author.localeCompare(secondAuthor.author)
);

const sortedByReversedAuthorName = [...books].sort(
  (firstAuthor, secondAuthor) =>
    secondAuthor.author.localeCompare(firstAuthor.author)
);

const sortedByAscendingRating = [...books].sort(
  (firstRating, secondRating) => firstRating.rating - secondRating.rating
);

const sortedByDescentingRating = [...books].sort(
  (firstRating, secondRating) => secondRating.rating - firstRating.rating
);

//hm42

// Change code below this line
const sortByAscendingBalance = (users) => {
  return [...users].sort((a, b) => a.balance - b.balance);
};
// Change code above this line

//hm43
// Change code below this line
const sortByDescendingFriendCount = (users) => {
  return [...users].sort(
    (firstFriend, secondFriend) =>
      secondFriend.friends.length - firstFriend.friends.length
  );
};
// Change code above this line

//hm44
// Change code below this line
const sortByName = (users) => {
  return [...users].sort((firstName, secondName) =>
    firstName.name.localeCompare(secondName.name)
  );
};
// Change code above this line
