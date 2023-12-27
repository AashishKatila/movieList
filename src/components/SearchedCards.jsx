import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import '../App.css'

const SearchedCards = ({ movie }) => {
  const { addMovieToHoldList, holdList } = useContext(GlobalContext);

  let storedMovies = holdList.find(storedMovie => storedMovie.id === movie.id)

  const holdListDisabled = storedMovies ? true : false

  return (
    <div className="my-2 px-20">
      {/* Movie Data  */}
      <div>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
            className="object-fill"
          />
        </div>
        <div className="">
          <div className="my-1 text-lg">{movie.title}</div>
          <div className="my-1 text-md">{movie.release_date}</div>
        </div>
      </div>
      {/* Buttons */}
      <div className="my-2">
        <button
          className="py-2 px-4 rounded-md bg-blue-500 text-white disabled:opacity-60 "
          disabled={holdListDisabled}
          onClick={() => addMovieToHoldList(movie)}
        >
          Add to Holdlist
        </button>
      </div>
    </div>
  );
};

export default SearchedCards;
