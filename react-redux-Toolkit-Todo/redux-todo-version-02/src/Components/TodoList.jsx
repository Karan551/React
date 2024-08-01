import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function TodoList({ todos }) {
    // const listTodo = useSelector((state) => state.myTodo.todos);
    const listTodo = todos;
    console.log("This is our todo", listTodo);

    const [todoMsg, setTodoMsg] = useState(todos.msg);

    const [isTodoEditAble, setIsTodoEditAble] = useState(false);


    const dispatch = useDispatch();

    const handleEdit = (id) => {
        dispatch(updateTodo({ todoId: id, todoMsg: todoMsg }));
        setIsTodoEditAble(!isTodoEditAble);
    };


    return (
        <div className='flex border border-black/10 rounded-lg px-3 py-2 gap-x-3 shadow-sm shadow-white/50 duration-500'>


            <input type="text"
                value={todoMsg}
                className={`text-2xl border outline-none w-full bg-transparent rounded-lg px-3 py-2 ${isTodoEditAble ? "border-black/50" : "border-transparent"}`}
                readOnly={!isTodoEditAble}
                onChange={(e) => setTodoMsg(e.target.value)}
            />


            {/* edit , save button */}
            <button className='w-10 h-10 rounded-lg  border border-black/50 inline-flex justify-center items-center text-red-500 font-semibold bg-gray-50 hover:bg-gray-200 shrink-0 disabled:opacity-30'
                onClick={() => handleEdit(todos.id)}
            >
                {isTodoEditAble ? "✏️" : "📁"}
                {/* {todos.id} */}
            </button>

            {/* delete button */}
            <button
                className='w-10 h-10 rounded-lg  border border-black/50 inline-flex justify-center items-center text-red-500 font-semibold bg-gray-50 hover:bg-gray-200 shrink-0'
                onClick={() => dispatch(removeTodo(todos.id))}
            >❌</button>


        </div>
    );
}

export default TodoList;
