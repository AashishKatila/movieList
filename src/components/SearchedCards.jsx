import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import "../App.css";
import genresData from './genres.json';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SearchedCards = ({ movie }) => {
  const { addMovieToHoldList, holdList, watchedMovie } =
    useContext(GlobalContext);

    const showToastMessage  = (movie) => {
      toast.success(`${movie.title} added to HoldList`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    };

  let storedMovies = holdList.find(
    (storedMovie) => storedMovie.id === movie.id
  );
  let storedMoviesWatched = watchedMovie.find(
    (storedMovieWatched) => storedMovieWatched.id === movie.id
  );

//To map the movie genres with their IDS
const genreMap = {};
genresData.genres.forEach(genre => genreMap[genre.id] = genre.name);

const movieGenreIds = movie.genre_ids;
const movieGenreNames = movieGenreIds.map(genreId => genreMap[genreId]);

// console.log(movieGenreNames);

  const holdListDisabled = storedMovies
    ? true
    : storedMoviesWatched
    ? true
    : false;

  return (
    <div className="my-2 px-20">
      {/* Movie Data  */}
      <div>
        <div>
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={`${movie.title} Poster`}
              className="object-fill"
            />
          ) : (
            <div className="w-52 md:h-80 h-72 object-fill bg-gray-400 block "></div>
          )}
        </div>
        <div className="">
          <div className="my-1 text-lg font-semibold">{movie.title}</div>
          <div className="my-1 text-md">{movie.release_date}</div>
          <div className="my-1 text-md ">
            Rating : {movie.vote_average == 0 ? "-" : movie.vote_average}
          </div>
          <div>
            Genres: {movieGenreNames.join(', ')}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="my-2">
        <button
          className="py-2 px-4 rounded-md bg-blue-500 text-white disabled:opacity-60 "
          disabled={holdListDisabled}
          onClick={() => {showToastMessage(movie);addMovieToHoldList(movie); }}
        >
          Add to Holdlist
        </button>
          <ToastContainer />
      </div>
    </div>
  );
};

export default SearchedCards;
