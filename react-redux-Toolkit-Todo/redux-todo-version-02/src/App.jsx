import { useSelector } from "react-redux";
import AddTodoForm from "./Components/AddTodoForm";
import TodoList from "./Components/TodoList";
import { useEffect, useState } from "react";


function App() {

  const savedData = JSON.parse(localStorage.getItem("myTodos"));
  let todos;
  if (savedData) {
    todos = savedData;

  } else {
    todos = useSelector((state) => {
      return state.myTodo.todos;
    });
  }

  const [myTodos, setMyTodos] = useState(todos);

  

  // useEffect(() => {
  //   const savedData = JSON.parse(localStorage.getItem("myTodos"));
  //   if (!savedData) return;
  //   savedData.length > 1 ?
  //     todos = savedData

  //     : false;

  // }, []);

  // To set value in localstorage
  useEffect(() => {
    localStorage.setItem("myTodos", JSON.stringify(todos));

  }, [todos]);

  //  console.log( localStorage["myTodos"])
  console.log("My Todos is app---", todos);
  console.log("My Todos is app??????", myTodos);

  /*  const getValueInStorage = () => {
     return JSON.parse(localStorage.getItem("myTodos"));
   }; */


  return (
    <>
      <main className="min-h-screen flex flex-col justify-start items-center space-y-3 bg-[#212121]">

        <section className="my-3 bg-gray-200/70 w-full max-w-2xl mx-auto shadow-lg rounded-xl px-4 py-2 text-black">
          <h1 className="text-5xl text-center font-semibold my-3">Our Todo</h1>
          <div>
            <AddTodoForm />
          </div>


          <section className="flex flex-col w-full items-center space-y-2 my-3">
            {/* Todo items are coming here */}
            {
              todos.length > 0 && todos.map((eachTodoObj) => (
                <div key={eachTodoObj.id} className="w-full">
                  <TodoList todos={eachTodoObj} />
                </div>

              ))
            }


          </section>

        </section>

      </main>
    </>
  );
}

export default App;
