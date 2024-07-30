import { createSlice } from "@reduxjs/toolkit";

import { studentsData } from "../../data.js";

// console.log("this is student data",studentsData)


const initialState = studentsData;

export const myStudentSlice = createSlice({
    name: "superMan",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {

            console.log("This is current action value", action);
            // console.log("Your name Is:",action.payload.name)
            // console.log("Your Profession Is:",action.payload.profession)


            state.value += Number(action.payload);
        },
        reset: (state, action) => {
            state.value = 0;
        }

    }
});

export const { increment, decrement, incrementByAmount, reset } = myStudentSlice.actions;

export default myStudentSlice.reducer;