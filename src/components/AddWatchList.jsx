import React, { useState } from "react";

const AddWatchList = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${
        import.meta.env.VITE_REACT_APP_API_URL
      }&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          console.log(data);
          setResults(data.results);
        } else [setResults([])];
      });
  };

  return (
    <div>
      <input
        placeholder="Enter a movie name"
        value={search}
        onChange={handleSearch}
      />
      {results.length > 0 && (
        <ul>
          {results.map((movie) => (
            <li key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AddWatchList;
