const numberOfFilms = +prompt('How Many Movies Have You Seen?', '');
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  prival: false
}
const lastFilm = prompt('One of the last movies you watched?', ''),
      rateOfFilm = prompt('How many points would you rate it?', '');

personalMovieDB.movies[lastFilm] = rateOfFilm;

console.log(personalMovieDB);