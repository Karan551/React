import React from 'react';

function Student({studentData}) {
    const info = studentData
    console.log("Student Infomation :-",info)
    return (
        <div>
            <h1>Hello I'm A Student.</h1>
            <h2>Ganesh Roll Number : </h2>
        </div>
    );
}

export default Student;
