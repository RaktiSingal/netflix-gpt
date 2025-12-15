import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import { MovieCategories } from '../utils/constants';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    // render movies based on categories here
    <div className="bg-black">
      <div className="px-10 -mt-52 relative z-10">
        {MovieCategories.map((category) => {
          return (
            <MovieList
              key={category.key}
              movies={movies[category.key]}
              title={category.title}
            />
          )
        })}
      </div>
    </div>
  )
}

export default SecondaryContainer