import { useState } from 'react';


import { TodoContextProvider } from './Context/TodoContext';
import TodoForm from './Components/TodoForm';
import TodoItem from './Components/TodoItem';

function App() {

  /* 
  todoItem = [
  {
  id:1,
  title:"Item-1"
  },
  {
  id:2,
  title:"Item-2"
  },
  {
  id:2,
  title:"Item-3"
  },
  {
  id:2,
  title:"Item-4"
  },
  
  ]
  
  
  
  */


  const [todo, setTodo] = useState([]);
  const addTodo = (title) => {
    setTodo((prevArr) => [...prevArr, { id: Date.now(), title: title }]);

  };
  const updateTodo = (id, title) => {

    setTodo((prevArr) =>
      prevArr.map((eachObject) => eachObject.id === id ? eachObject.title = title : eachObject)
    );
  };
  const myTodo = { id: 1, title: "Hello World" };

  const deleteTodo = (id) => {

    setTodo((prevArr) => prevArr.filter((eachObject) => eachObject.id !== id));
  };

  // console.log(todo);



  return (
    <>
      <TodoContextProvider value={{ todo, addTodo, updateTodo, deleteTodo }}>
        <div className="bg-[#212121] min-h-screen py-8 text-white">
          <div className="w-full max-w-2xl mx-auto shadow-md bg-gray-300 shadow-gray-100 rounded-lg px-6 py-3 text-black font-extralight">
            <h1 className="text-4xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
              {/* Todo form goes here */}


              <TodoForm />
            </div>
            <div className="flex flex-wrap gap-y-3">
              {/*  */}
              {
                todo.map((eachTodo, index) => (
                  <div key={index}>


                    <TodoItem todo={eachTodo} />
                  </div>
                ))
              }



            </div>
          </div>
        </div>
      </TodoContextProvider>
    </>
  );
}

export default App;
