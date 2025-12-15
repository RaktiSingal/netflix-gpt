import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name: 'movies',
    initialState : {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        setPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        setTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        setUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        }
    }
});

export const {addNowPlayingMovies, setPopularMovies, setTopRatedMovies, setUpcomingMovies} = MovieSlice.actions;
export default MovieSlice.reducer;
