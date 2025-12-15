import React from 'react'
import { IMAGE_URL, } from '../utils/constants'

const MovieCard = ({movie}) => {
  return (
    <div className='w-40'>
      <img
        src={`${IMAGE_URL}${movie?.poster_path}`}
        alt={movie.original_name}
      />

    </div>
  )
}

export default MovieCard