import React from 'react';
import { useContext } from "react";
import { MyContext } from "../../MyContext.js";

function Student() {
    const data = useContext(MyContext);
    console.log("This is my data ", data);
    return (
        <div>
            <h1>Hello I'm A Student.</h1>
            <h2>Ganesh Roll Number : </h2>
        </div>
    );
}

export default Student;
