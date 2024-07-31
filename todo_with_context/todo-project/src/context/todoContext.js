import { createContext, useContext } from "react";

const TodoContext = createContext({

    myTodo: [
        {
            id: 1,
            msg: "Hello Worlds",
            completed: false,
        }
    ],
    addTodo: (todo) => { },
    deleteTodo: (id) => { },
    updateTodo: (id, todoMsg) => { },
    toggleComplete: (id) => { },



});

export const TodoContextProvider = TodoContext.Provider;


function useTodo() {
    return useContext(TodoContext);
}

export default useTodo;

