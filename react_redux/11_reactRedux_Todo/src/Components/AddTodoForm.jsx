import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo,updateTodo } from "../features/todo/todoSlice";


function AddTodoForm() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        // To clean input field.
        setInput("");
        console.log("Form is submitted.");
    };



    return (
        <div>
            <form className="flex" onSubmit={addTodoHandler}>
                <input
                    type="text"
                    placeholder="Write Todo..."
                    className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5 text-xl"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    required
                />
                <button type="submit" className="rounded-r-lg px-3 py-1 bg-[#49df85] text-xl text-black shrink-0 hover:bg-[#0A6847] hover:text-[#f5f5f5]">
                    Add
                </button>
            </form>
        </div>
    );
}

export default AddTodoForm;
