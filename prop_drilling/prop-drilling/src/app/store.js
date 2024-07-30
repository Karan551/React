import { configureStore } from "@reduxjs/toolkit";



import myStudentReducer from "../features/MyStudent/myStudentSlice.js"
// console.log("this is my reducer-----",myStudentReducer)

export default configureStore({
    reducer: {
       favNumber: myStudentReducer
    }
});