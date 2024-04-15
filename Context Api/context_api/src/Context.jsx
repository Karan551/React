import { createContext } from 'react';
const data = {
    mname: "Go To U.K.",
    agent: "007",
    accept: "Not Accepted"

};
// create context returns a context object It has two properties 
// 1.) Provider          2.) Consumer
export const LevelContext = createContext(10);