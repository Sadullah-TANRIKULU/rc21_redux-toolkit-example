import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: '',
};

const newsSlice = createSlice( {
    name: "news",
    initialState: initialState,
    reducers: {
        
    },
});

// export const  { setUser, clearUser } = newsSlice.actions;

export default newsSlice.reducer;