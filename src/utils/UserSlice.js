import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: 'User',
    initialState: {
        currentUser: null
    },
    reducers: {
        setUserData: (state, action)  => {
            state.currentUser = action.payload;
        }
    }
});

export const {setUserData} = UserSlice.actions;

export default UserSlice.reducer;
