const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  startMovieSurvey: function(){
    personalMovieDB.count = +prompt('How Many Movies Have You Seen?', '');

   while (personalMovieDB.count == null || personalMovieDB.count == ''|| isNaN(personalMovieDB.count)) {
    personalMovieDB.count = +prompt('How Many Movies Have You Seen?', '');
   }
  },
  contMovieSurvey: function(){
    for (let i = 0; i< 2; i++) {
      let lastFilm = prompt('One of the last movies you watched?', '');
          rateOfFilm = prompt('How many points would you rate it?', '');
          if (lastFilm !== null && rateOfFilm !== null && lastFilm !== '' && rateOfFilm !== '' && lastFilm.length < 50) {
            personalMovieDB.movies[lastFilm] = rateOfFilm;
          } else {
            i--;
          }
    }
  },
  yourLevelMovieSurvey: function () {
    if (numberOfFilms > 100) {
      alert('You are a movie buff!!');
    } else if ( 50 < numberOfFilms < 100) {
      alert('Not bad at all!')
    } else {
      alert('Watch more movies!')
    }
  },
  showMyDB: function(hidden){
    if(!hidden){
      console.log(personalMovieDB);
    }
  },
  writeYourGenres: function(){
    for (let i=1; i<2;i++) { 
      let genres = prompt('Your favorite genres separated by commas');
      if(genres === ''|| genres == null) {
        i--;
      } else {
        personalMovieDB.genres = genres.split(', ');
        personalMovieDB.genres.sort();

      }
       
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Your favorite genres ${i+1} - ${item}`)
    })
  }
}

