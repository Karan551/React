import { createSlice, nanoid } from "@reduxjs/toolkit";
import { act } from "react";
const initialState = {
    todos: [{ id: 1, msg: "Hello World" }]

};

export const todoSlice = createSlice({
    name: "todo2",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = { id: nanoid(), msg: action.payload };
            state.todos.push(newTodo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((eachTodoObj) => (
                eachTodoObj.id !== action.payload
            ));

        },
        updateTodo: (state, action) => {
            console.log("this is our state", state);
            console.log("this is current action", action);
            /*  const updatedTodo = state.todos.map((eachTodoObj) => (
                 eachTodoObj.id === action.payload.todoId ?
                     eachTodoObj.msg = action.payload.todoMsg
                     : eachTodoObj
 
             ));
             state.todos = updatedTodo; */
        },

    }

});


export const { addTodo, removeTodo } = todoSlice.actions;

// console.log("this is our todo slice---", todoSlice);
// console.log("*********", todoSlice.name, "\n", todoSlice.reducer, "\n", todoSlice.initialState);
// console.log("this is reducer----", todoSlice.reducer);
// console.log("?????",todoReducer)
export default todoSlice.reducer;