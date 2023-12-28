import React, { useState } from "react";
import SearchedCards from "./SearchedCards";

const AddHoldList = () => {
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
    <div className="flex flex-col mt-4 mx-4 md:mt-6">
      <input
      className="py-3 px-6 mx-20 rounded-xl bg-gray-700 outline-none border-b-2 text-xl text-slate-300 "
        placeholder="Enter a movie name"
        value={search}
        onChange={handleSearch}
      />
      {results.length > 0 &&  (
        <ul className="py-6 grid grid-cols-1 items-end md:grid-cols-2 lg:grid-cols-3 gap-4">
          {results.map((movie) => (
            <li key={movie.id} className="animate-fade-in">
              <SearchedCards movie={movie} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AddHoldList;
