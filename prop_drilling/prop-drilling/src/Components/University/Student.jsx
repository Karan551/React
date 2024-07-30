import React, { useState } from 'react';
import { useContext } from "react";
import { MyContext } from "../../MyContext.js";







function Student() {
    const [inputValue, setInputValue] = useState("");
    const [studentInfo, setStudentInfo] = useState([]);
    const [getInfo, setGetInfo] = useState(false);

    const [check, setCheck] = useState(false);
    // const [getInfo,setGetInfo]=useState()

    const studentData = useContext(MyContext);


    const handleClick = () => {
        setCheck(true);
        const findStudent = studentData.filter((eachObject) =>
            eachObject.name.toLowerCase() === inputValue.trimEnd().toLowerCase()
        );
        if (findStudent.length == 0) {
            setStudentInfo([]);
            setGetInfo(true);
        } else {

            setStudentInfo(findStudent);
            setGetInfo(false);
        }
        // To empty input section.
        setInputValue("");

    };

    
    
    return (
        <div>
            <h1>Hello I'm A Student.</h1>
            <input type="text"
                className='input-field'
                placeholder='Enter Your Name ....'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}

                name="student-info"
                id="student-info" />
            <button
                className='btn'
                onClick={handleClick}
                disabled={!inputValue}
            >Show Info</button>


            <h2 className='my-2'>Student Information is: </h2>

            {
                check && studentInfo.length > 0 &&
                studentInfo.map((eachObject) => (
                    <section>
                        <h2>Student Roll Number Is: {eachObject.roll_number}</h2>
                        <h2>Student Name Is: {eachObject.name}</h2>
                        <h2>Student class Is: {eachObject.class}</h2>
                        <h2>Student Interest Is: {eachObject.interest}</h2>
                    </section>
                ))

            }
            {
                check && getInfo &&
                <div className='error-msg'>User Not Found</div>
            }

        </div>
    );
}

export default Student;
