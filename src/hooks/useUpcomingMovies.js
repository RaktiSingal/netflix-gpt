import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, UPCOMING_URL } from "../utils/constants";
import {setUpcomingMovies} from '../utils/MovieSlice';


const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const getUpcomingMovieData = async() => {
        const data = await fetch(UPCOMING_URL, API_OPTIONS);
        const json = await data.json();

        dispatch(setUpcomingMovies(json.results))
    }

    useEffect(() => {
        getUpcomingMovieData();
    }, []);
}

export default useUpcomingMovies;