import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "../features/todo/todoSlice";

// console.log("this is our reducer", todoReducer);

export default configureStore({
    reducer: {
        myTodo: todoReducer,
    }
});