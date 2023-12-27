import React, { useState } from "react";
import SearchedCards from "./SearchedCards";

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
    <div className="flex flex-col  items-center mx-4 md:mx-6">
      <input
      className="w-full md:w-[600px] my-4 outline-none border-b-2 text-lg text-gray-500 "
        placeholder="Enter a movie name"
        value={search}
        onChange={handleSearch}
      />
      {results.length > 0 && (
        <ul className="py-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {results.map((movie) => (
            <li key={movie.id}>
              <SearchedCards movie={movie} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AddWatchList;
