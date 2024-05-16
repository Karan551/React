import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: 0, name: "Hulk" },
    { id: 1, name: "Peter Parker" },
    { id: 2, name: "Tony Stark" },
    { id: 3, name: "Naag Raz" },
    { id: 4, name: "ShaktiMan" },
];



export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {

    }
});


export default userSlice.reducer;