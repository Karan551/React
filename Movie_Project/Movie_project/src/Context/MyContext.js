import { createContext, useContext } from "react";

const MyContext = createContext(null);


export const MyContextProvider = MyContext.Provider;


export function useData() {
    return useContext(MyContext);
}