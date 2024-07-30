import AddTodoForm from "./Components/AddTodoForm";
import TodoList from "./Components/TodoList";



function App() {


  return (
    <>
      <div className="min-h-screen flex flex-col justify-start items-center space-y-3 bg-gray-300">

        <h1 className="text-5xl">Our Todo</h1>

        <AddTodoForm />
        <TodoList />
      </div>
    </>
  );
}

export default App;
