import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null
};

const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        login: (state, action) => {
            console.log("this is state", state);
            state.status = true;
            //
            console.log("this is payload::", action.payload);
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
    }

});

export const { login, logout } = blogSlice.actions;
export default blogSlice.reducer;