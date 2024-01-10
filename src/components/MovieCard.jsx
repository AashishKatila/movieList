import React from "react";
import MovieControl from "./MovieControl";

const MovieCard = ({ movie, type }) => {
  return (
    <div className="relative group">
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={`${movie.title} `}
        />
      ) : (
        <div className="w-52 md:h-80 h-72 object-fill bg-gray-400 block ">
          <div className="absolute top-36 left-20 text-white font-3xl font-bold">{movie.title}</div></div>
      )}
      <MovieControl movie={movie} type={type} />
    </div>
  );
};

export default MovieCard;
