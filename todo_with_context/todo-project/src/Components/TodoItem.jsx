import React from 'react';
import { useState } from 'react';
import useTodo from '../context/todoContext';

function TodoItem({ todos }) {
    /* 
    todos={
    id:1,
    msg:"hello world",
    completed:false,
    }
    */
    const [todoMsg, setTodoMsg] = useState(todos.msg);
    // const [inputValue, setInputValue] = useState("");
    const [isTodoEditAble, setIsTodoEditAble] = useState(false);

    const { deleteTodo, updateTodo, toggleComplete } = useTodo();

    const handleEdit = () => {
        if (isTodoEditAble) {
            updateTodo(todos.id, { ...todos, msg: todoMsg, });
            setIsTodoEditAble(false);

        } else {
            setIsTodoEditAble(!isTodoEditAble);
        }

    };


    // console.log("this is latest todo msg", todoMsg);

    return (
        <div className={`flex border border-black/10 rounded-lg px-3 py-2 gap-x-3 shadow-sm shadow-white/50 duration-500
        ${todos.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}
        `}>

            <input type="checkbox"
                className='cursor-pointer'
                checked={todos.completed}
                onChange={() => toggleComplete(todos.id)}
            />
            <input type="text"
                className={` text-2xl border outline-none w-full bg-transparent rounded-lg ${isTodoEditAble ? "border-black/50" : "border-transparent"}
                      ${todos.completed ? "line-through" : ""}

                `
                }
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditAble}

            />

            {/* edit , save button */}
            <button className='w-10 h-10 rounded-lg  border border-black/50 inline-flex justify-center items-center text-red-500 font-semibold bg-gray-50 hover:bg-gray-200 shrink-0 disabled:opacity-30'
                onClick={handleEdit}
                disabled={todos.completed}
            >
                {isTodoEditAble ? "✏️" : "📁"}
                {/* {todos.id} */}
            </button>

            {/* delete button */}
            <button
                className='w-10 h-10 rounded-lg  border border-black/50 inline-flex justify-center items-center text-red-500 font-semibold bg-gray-50 hover:bg-gray-200 shrink-0'
                onClick={() => deleteTodo(todos.id)}
            >❌</button>
        </div>
    );
}

export default TodoItem;
