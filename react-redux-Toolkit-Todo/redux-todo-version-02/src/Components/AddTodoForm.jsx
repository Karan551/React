import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, removeTodo } from "../features/todo/todoSlice";

function AddTodoForm() {

    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch();


    const handleClick = () => {
        dispatch(addTodo(inputValue));
        setInputValue("");
    };




    return (
        <section className='px-5 py-5 bg-white rounded-xl'>
            <form >
                <input type="text"
                    placeholder='Enter text here ....'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}

                    className='px-5 py-4 text-3xl font-semibold rounded-l-2xl  border border-indigo-300 outline-none focus:border-indigo-600' />
                <button type='button' className='bg-black 
                px-4 py-4 text-3xl rounded-r-2xl text-white hover:bg-indigo-500 hover:shadow-lg hover:text-[#f5f5f5] active:shadow-2xl active:shadow-green-400/80'
                    onClick={handleClick}

                >Add Todo</button>
            </form>
        </section>
    );
}

export default AddTodoForm;
