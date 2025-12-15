import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, TOP_RATED_URL } from "../utils/constants";
import {setTopRatedMovies} from '../utils/MovieSlice';


const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    const getTopRatedMovieData = async() => {
        const data = await fetch(TOP_RATED_URL, API_OPTIONS);
        const json = await data.json();

        dispatch(setTopRatedMovies(json.results))
    }

    useEffect(() => {
        getTopRatedMovieData();
    }, []);
}

export default useTopRatedMovies;