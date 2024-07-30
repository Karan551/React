import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, reset } from '../../features/MyStudent/myStudentSlice';
function MyStudent() {
  const studentData = useSelector((state) => state.favNumber);
  const [inputValue, setInputValue] = useState("");
  const [studentInfo, setStudentInfo] = useState([]);


  const [trigger, setTrigger] = useState(false);
  const [getInfo, setGetInfo] = useState(false);




  console.log("This is default value ", studentData);
  const handleClick = () => {
    setTrigger(true);


    const getStudent = studentData.filter((eachObject) => eachObject.name.toLowerCase() == inputValue.toLowerCase());
    if (getStudent.length > 0) {
      setStudentInfo(getStudent);
      setGetInfo(false);
    } else {
      setStudentInfo([])
      setGetInfo(true);

    }
  };


  return (
    <>
      <h1>Student Information Is :</h1>
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

      >Show Info</button>

      {
        trigger && studentInfo.length > 0 &&
        studentInfo.map((eachObject, index) => (
          <div key={index}>


            <h2>Student Roll Number : {eachObject.roll_number}</h2>
            <h2>Student Name : {eachObject.name}</h2>
            <h2>Student Class : {eachObject.class}</h2>
            <h2>Student Interest : {eachObject.interest}</h2>
          </div>
        ))


      }
      {
        trigger && getInfo &&
        <div className='error-msg'>User Not Found</div>
      }


    </>

  );
}

export default MyStudent;
