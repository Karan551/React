


import LoadProducts from './Components/LoadProducts';
import "./App.css"
function App() {


  return (
    <>
      <h1>Load More Products App</h1>
      <LoadProducts limit={10} url={"https://dummyjson.com/products"} skip={20} />

    </>
  );
}

export default App;
