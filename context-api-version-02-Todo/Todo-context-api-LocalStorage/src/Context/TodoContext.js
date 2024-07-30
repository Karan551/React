import { createContext, useContext } from "react";

const TodoContext = createContext(null);



export const TodoContextProvider = TodoContext.Provider;



export function useTodo() {
    return useContext(TodoContext);
}