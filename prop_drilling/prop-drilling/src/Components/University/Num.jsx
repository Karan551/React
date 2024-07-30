import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount,reset } from '../../features/MyStudent/myStudentSlice';
function Num() {
  const data = useSelector((state) => state.favNumber.value);
  const [inputValue, setInputValue] = useState("");
  console.log("This is my Current State :", data);
  const myObj = { name: "Ganesh", "profession": "Programmer" };
  const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const handleNum = (event) => {
    let value = event.target.value;
    // value = Number(value);

    
    
    setInputValue(value);
  };


  const dispatch = useDispatch();
  return (
    <div>
      <h1>This is my student component.</h1>


      <p className='my-2 fs-3'>This is my default Current value {data > 0 ? data : 0}</p>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())} className='mx-2'>Decrement</button>
      <div className='my-2'>



        <input
          type="number"
          value={inputValue}
          onChange={handleNum}
          className='input-field'
          name="num_val"
          id="num_val"
          placeholder='Enter a number....'

        />
        <button onClick={() => dispatch(incrementByAmount(inputValue))} className='mx-2'>Increment By Amount</button>
      </div>
      <div>
        <button onClick={()=>dispatch(reset())}>Reset</button>
      </div>
    </div>

  );
}

export default Num;

