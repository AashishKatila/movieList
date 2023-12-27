import React from 'react'

const SearchedCards = ({movie}) => {
  return (
    <div className=''>
        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`} />
            <div>
                <h2>{movie.title}</h2>
                <h4>{movie.release_date}</h4>
            </div>
    </div>
  )
}

export default SearchedCards