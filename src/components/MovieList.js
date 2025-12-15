import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({movies, title}) => {
    return (
        <div className="mb-10">
            <div className="text-white text-2xl pb-5">{title}</div>
            <div className="flex overflow-x-scroll">
                <div className="flex gap-5">
                    {movies?.map((movie) => {
                        return (
                            <MovieCard movie={movie} key={movie.id}/>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default MovieList