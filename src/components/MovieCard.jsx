import React from "react";
import MovieControl from "./MovieControl";

const MovieCard = ({ movie, type }) => {
  return (
    <div className="relative group">
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={`${movie.title} `}
      />
      <MovieControl movie={movie} type={type} />
    </div>
  );
};

export default MovieCard;
