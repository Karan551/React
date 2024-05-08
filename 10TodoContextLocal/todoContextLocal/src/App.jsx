import { useEffect, useState } from 'react';
import { TodoContextProvider } from "./Context";
import { Heading, TodoForm, TodoItem } from './Components';
function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((oldTodo) => [{ id: Date.now(), ...todo }, ...oldTodo]);
  };

  // eachTodo ==> object

  const updateTodo = (id, todo) => { setTodos((todoArr) => todoArr.map((eachTodoObj) => eachTodoObj.id === id ? todo : eachTodoObj)); };

  const deleteTodo = (id) => { setTodos((todoArr) => todoArr.filter((eachTodoObj) => eachTodoObj.id !== id)); };

  const toggleComplete = (id) => { setTodos((todoArr) => todoArr.map((eachTodoObj) => eachTodoObj.id === id ? { ...eachTodoObj, completed: !eachTodoObj.completed } : eachTodoObj)); };

  // Local Storage
  // It is used to get Item from Local Storage. 
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);
  // todos ==> type of is a object, we have to pass string in localstorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <TodoContextProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
        <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-black bg-gray-200">
            <Heading />
            <div className="mb-4">
              <TodoForm />
              {/* Todo form goes here */}
            </div>
            <div className="flex flex-wrap gap-y-3 pb-3">
              {/*Loop and Add TodoItem here */}
              {
                todos.map((todo) => (
                  <div className="w-full" key={todo.id}>
                  <TodoItem todo={todo} />
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
