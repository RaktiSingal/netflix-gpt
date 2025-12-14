import { useState, useEffect } from "react";
import {API_OPTIONS} from '../utils/constants.js';

const useMovieTrailer = (movieId) => {
    const [trailer, setTrailer] = useState(null);
    
    const getMovieVideoData = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
        const json = await data.json();
        const filterTrailer = json.results?.filter((r) => r.type === 'Trailer') || 0;
        const trailerData = filterTrailer.length ? filterTrailer[0] : json.results[0];
        setTrailer(trailerData);
    }

    useEffect(() => {
        getMovieVideoData();
    }, []);

    return trailer;
};

export default useMovieTrailer;
