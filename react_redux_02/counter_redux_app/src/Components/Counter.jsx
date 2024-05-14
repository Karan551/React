import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from '../features/counter/counterSlice';


const Counter = () => {
    const [inputValue, setInputValue] = useState("");
    // Convert the input value in Number if not a number then set value to 0.
    const addValue = Number(inputValue) || 0;
    // To get the initial value of counter with the help of useSelector.
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    return (
        <section>
            <p>{count > 0 ? count : 0}</p>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
            <div className='input-container'>
                <input type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button className='reset-btn' onClick={() => setInputValue("")}>Reset Input</button>
            </div>
            <div>
                <button onClick={() => dispatch(reset())}>Reset</button>
                <button onClick={() => dispatch(incrementByAmount(addValue))}>Amount</button>
            </div>
        </section>
    );
};

export default Counter;
