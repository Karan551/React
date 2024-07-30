import { useState } from "react";
import { useTodo } from "../Context/TodoContext";

function TodoForm() {

    const [inputValue, setInputValue] = useState("");
    const { addTodo } = useTodo();
    // console.log("Add todo", addTodo);
    const myTodos = () => {
        // e.preventDefault();
        console.log("Form is submitted.");

        addTodo(inputValue);
    };


    return (
        <form className="flex" >
            <input
                type="text"
                placeholder="Write Todo..."
                className="text-3xl font-medium  w-full border border-black/30 rounded-l-lg px-6 outline-none duration-150 bg-white/20 py-3"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}

            />
            <button type="button" className="rounded-r-lg px-3 py-2 font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-white shrink-0 text-xl hover:bg-gradient-to-br btn"
                onClick={myTodos}
            >
                Add
            </button>
        </form>
    );
}

export default TodoForm;

