import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './UserSlice';
import MoviesReducer from './MovieSlice';
import GptReducer from './GptSlice';

const AppStore = configureStore({
    reducer: {
        user: UserReducer,
        movies: MoviesReducer,
        gptSearch: GptReducer,
    }
});

export default AppStore;
