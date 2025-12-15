import { createSlice } from "@reduxjs/toolkit";

const GptSearchSlice = createSlice({
    name: 'gptsearch',
    initialState: {
        gptSearch: false
    },
    reducers: {
        toggleGpt: (state) => {
            state.gptSearch = !state.gptSearch;
        }
    }
})

export const {toggleGpt} = GptSearchSlice.actions;

export default GptSearchSlice.reducer;
