const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction", "mysticism"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism", "adventure"],
  },
];
// Change code below this line
const allGenres = books.flatMap((book) => book.genres);
const uniqueGenres = allGenres.filter(
  (genre, index, allgenres) => allgenres.indexOf(genre) === index
);

console.log(allGenres); //это массив ["adventure", "history", "fiction", "mysticism", "horror", "mysticism", "adventure"]
console.log(uniqueGenres); // это массив ["adventure", "history", "fiction", "mysticism", "horror"]
