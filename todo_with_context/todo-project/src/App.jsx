import { useEffect, useState } from 'react';

import { ThemeContextProvider, TodoContextProvider } from './context/todoContext';
import TodoForm from './Components/TodoForm';
import TodoItem from './Components/TodoItem';
import Navbar from './Components/Navbar';

function App() {
  const [myTodo, setMyTodo] = useState([]);

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("myTheme");
    return savedTheme ? savedTheme : "light";
  });

  const addTodo = (todo) => {
    setMyTodo((prev) => [{ id: Date.now(), ...todo }, ...prev]);

  };


  const updateTodo = (id, todo) => {

    setMyTodo((prevTodo) => prevTodo.map((eachTodoObj) => (
      eachTodoObj.id === id ? todo : eachTodoObj
    )));
  };

  const deleteTodo = (id) => {
    const newTodo = myTodo.filter((eachTodoObj) => (
      eachTodoObj.id !== id
    ));
    setMyTodo(newTodo);
  };

  const toggleComplete = (id) => {

    setMyTodo((prevTodo) => prevTodo.map((eachTodoObj) =>
      eachTodoObj.id === id ? { ...eachTodoObj, completed: !eachTodoObj.completed } : eachTodoObj
    ));

  };

  // To set theme
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);

  }, [theme]);

  // To get Item In Local Stroage
  useEffect(() => {
    const myPrevTodos = JSON.parse(localStorage.getItem("todos"));

    if (myPrevTodos && myPrevTodos.length > 0) {
      setMyTodo(myPrevTodos);
    }
  }, []);


  // To set Item In Local Stroage
  useEffect(() => (
    localStorage.setItem("todos", JSON.stringify(myTodo))

  ), [myTodo]);

  // To store theme value in localStorage.
  localStorage.setItem("myTheme", theme);

  return (
    <>
      <ThemeContextProvider value={{ theme, setTheme }}>

        <Navbar />
      </ThemeContextProvider>

      <TodoContextProvider value={{ myTodo, addTodo, updateTodo, deleteTodo, toggleComplete }}>
        <main className='min-h-screen bg-gray-400/50 dark:bg-[#172842] dark:text-[#f5f5f5] py-8'>


          <section className='w-full max-w-2xl mx-auto shadow-lg rounded-xl px-4 py-2 bg-white/70 dark:bg-gray-200/70  dark:text-black'>
            <h1 className='text-5xl text-center font-semibold my-3'>Manage Your Todos</h1>

            <div className="my-2 flex justify-center">
              <TodoForm />
            </div>


            <div className='flex flex-col w-full items-center space-y-2'>
              {/* todo items are coming here */}
              {
                myTodo.length > 0 && myTodo.map((eachTodo, index) => (

                  <div key={eachTodo.id} className='w-full'>

                    <TodoItem todos={eachTodo} />
                  </div>
                ))
              }
            </div>

          </section>
        </main>
      </TodoContextProvider>
    </>
  );
}

export default App;
