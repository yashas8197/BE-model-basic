const { initializeDatabase } = require("./db/db.connect");

const Movie = require("./models/movies.model");

initializeDatabase();

const newMovie = {
  title: "New Movie",
  releaseYear: 2023,
  genre: ["Drama"],
  director: "Yashas",
  actors: ["Actor 1", "Actor 2"],
  language: "Hindi",
  country: "India",
  rating: 10,
  plot: "A man who becomes a developer",
  awards: "Oscar",
  posterUrl: "https://example.com/new-poster1.jpg",
  trailerUrl: "https://example.com/new-trailer1.mp4",
};

async function createMovie(newMovie) {
  try {
    const movie = new Movie(newMovie);
    const saveMovie = await movie.save();
    console.log("New Movie Data", saveMovie);
  } catch (error) {
    throw error;
  }
}

// createMovie(newMovie);

// find a movie with a perticular title

async function readMovieByTitle(movieTitle) {
  try {
    const movie = await Movie.findOne({ title: movieTitle });
    console.log(movie);
  } catch (error) {
    throw error;
  }
}

// readMovieByTitle("PK");

// To get all the movies in the database

async function readAllMovies() {
  try {
    const allMovies = await Movie.find();
    console.log(allMovies);
  } catch (error) {
    throw error;
  }
}

// readAllMovies();

//Get movie By director Name

async function getMovieByDirector(directorName) {
  try {
    const movie = await Movie.findOne({ director: directorName });
    console.log(movie);
  } catch (error) {
    throw error;
  }
}

getMovieByDirector("Yashas");
