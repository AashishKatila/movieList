import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import MovieCard from './MovieCard'

const Watched = () => {
  const {watchedMovie} = useContext(GlobalContext)
  return (
    <div className='mt-4 mx-4 md:mt-6 md:mx-20'>
        <div className='text-2xl font-bold'>My Holdlist</div>
        {watchedMovie.length > 0 ?(
            <div className='py-6 grid grid-cols-1 items-end md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {watchedMovie.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} type="watchedMovie" />
                ))}
            </div>
        ) : (
            <div className='text-3xl font-bold text-gray-500 text-center mt-10'>
                You need to complete the movies ASAP!!!
            </div>
            
        )}
    </div>
  )
}

export default Watched