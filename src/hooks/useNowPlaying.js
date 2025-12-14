import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {BROWSE_URL, API_OPTIONS} from '../utils/constants.js';
import { addNowPlayingMovies } from '../utils/MovieSlice.js';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlayingData = async () => {
        const data = await fetch(BROWSE_URL, API_OPTIONS)
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results || []));
    }

    useEffect(() => {
        getNowPlayingData();
    }, []);
}

export default useNowPlayingMovies;
