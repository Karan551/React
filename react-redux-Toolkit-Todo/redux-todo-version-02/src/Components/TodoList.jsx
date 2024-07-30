import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from "../features/todo/todoSlice";

function TodoList() {
    const listTodo = useSelector((state) => state.myTodo.todos);
    console.log("This is list todo", listTodo);

    const [todoMsg, setTodoMsg] = useState("");

    const [isTodoEditAble, setIsTodoEditAble] = useState(false);

    console.log("this is todo msg", todoMsg);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeTodo(id));
    };

    const handleEdit = (id) => {
        console.log("this is todo id", id);

        setIsTodoEditAble(!isTodoEditAble);
    };


    return (
        <div className='w-full flex flex-col justify-center'>
            {
                listTodo.length > 0 && listTodo.map((eachTodoObj, index) => (

                    <div className='w-2/3  mx-auto text-2xl flex justify-between items-center px-2 py-2' key={index}>

                        <input type="text"
                            className={`border outline-none w-2/3  rounded-lg px-4 py-2 text-3xl
                            ${isTodoEditAble ? "border-black/80 px-4 bg-white" : "border-transparent bg-transparent"}
                            
                            `}



                            value={todoMsg}
                            onChange={(e) => setTodoMsg(e.target.value)}
                            readOnly={!isTodoEditAble}

                        />






                        <div>
                            <button className={`mx-2 px-5 py-1 rounded-lg text-white
                               ${isTodoEditAble ? "bg-yellow-500" : "bg-yellow-100"}
                              
                               hover:bg-yellow-700 hover:cursor-pointer`}
                                onClick={() => handleEdit(eachTodoObj.id)}
                            >✏️</button>



                            <button className='  mx-2 px-5 py-1 rounded-lg text-white hover:cursor-pointer bg-red-500 hover:bg-red-700' onClick={() => handleRemove(eachTodoObj.id)}>X</button>
                        </div>
                    </div>
                )

                )
            }

            {/* <div className='w-2/3 text-2xl flex justify-between px-2 py-2'>Hello World <button>X</button></div> */}
        </div>
    );
}

export default TodoList;
