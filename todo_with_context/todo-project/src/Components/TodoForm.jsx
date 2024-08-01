import React, { useState } from 'react';
import useTodo from '../context/todoContext';

function TodoForm() {

    const [inputValue, setInputValue] = useState("");
    const { addTodo } = useTodo();


    const handleSubmit = (event) => {
        event.preventDefault();
        if (!inputValue) return;
        addTodo({ msg: inputValue, completed: false });
        setInputValue("");

    };


    return (

        <form onSubmit={handleSubmit}>


            <input type="text"
                className='px-3 py-4 text-3xl font-semibold rounded-l-xl border-none outline-none focus:ring focus:border-[0.5px] focus:border-sky-200/80 focus:outline-none'
                placeholder='Enter Text Here...'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />


            <button className='text-3xl font-semibold px-3 py-4 text-white shadow-sm shadow-white/60 bg-teal-500 hover:bg-teal-700 rounded-r-xl hover:text-orange-300 active:shadow-xl active:shadow-green-300'
                type='submit'


            >Add Todo</button>
        </form>

    );
}

export default TodoForm;
