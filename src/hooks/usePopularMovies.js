import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, POPULAR_URL } from "../utils/constants";
import {setPopularMovies} from '../utils/MovieSlice';


const usePopularMovies = () => {
    const dispatch = useDispatch();

    const getPopularMovieData = async() => {
        const data = await fetch(POPULAR_URL, API_OPTIONS);
        const json = await data.json();

        dispatch(setPopularMovies(json.results))
    }

    useEffect(() => {
        getPopularMovieData();
    }, []);
}

export default usePopularMovies;