import { createContext, useContext } from "react";

// First Create context and Store initial variable value.
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false
        }
    ],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }
});

// Second createContext.Provider and export where we want use we will have to wrap this provider.
export const TodoContextProvider = TodoContext.Provider;


// Third (optional) create a function and export this using useContext()
export const useTodo = () => {
    return useContext(TodoContext);
};


// Finish Context 