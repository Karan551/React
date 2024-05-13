import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [
        { id: 1, text: "Hello World" },
        // { id: 2, text: "Hello Js", },
        // { id: 3, text: "Hello Python", }
    ]
};


export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            // This is a new todo that we will add a new Todo.
            const todo = {
                id: nanoid(),
                text: action.payload
            };
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            console.log("THis is action", action);
            state.todos = state.todos.filter((eachTodoObj) => (eachTodoObj.id !== action.payload));
        },
        updateTodo: (state, action) => {
            console.log("This is action:", action);
            const [id, msg] = action.payload;
            console.log(`This is id ${id} and this is msg ${msg}`);
            // console.log("This is action", action);
            state.todos = state.todos.map((eachTodoObj) => (eachTodoObj.id === action.payload ? eachTodoObj.text = action.payload.text : eachTodoObj));
        }

    }
});

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;


export default todoSlice.reducer;
