import React, { useState } from 'react';

import { useTodo } from '../Context';
function TodoForm() {
    //  this state for indiviual state.
    const [todo, setTodo] = useState("");
    const { addTodo } = useTodo();
    const add = (e) => {
        console.log("Form is submit", todo, !todo);
        e.preventDefault();
        if (!todo) return;
        addTodo({ id: Date.now(), todo: todo, completed: false });
        // To Reset todo after submitting form
        setTodo("");
    };

    return (
        <div>
            <form onSubmit={add} className="flex">
                <input
                    type="text"
                    placeholder="Write Something To Add ....."
                    className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5 text-xl"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />
                <button type="submit" className="rounded-r-lg px-3 py-1 font-semibold bg-green-600 text-white shrink-0 hover:bg-green-700">
                    Add
                </button>
            </form>
        </div>
    );
}

export default TodoForm;
