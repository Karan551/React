import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import { useState } from "react";
import { data } from "./data";

function App() {

  const storedData = JSON.parse(localStorage.getItem("shopplingList"));

  // const [items, setItems] = useState(storedData && storedData.length ? storedData : data);
  const [items, setItems] = useState(data);

  const handlCheck = (id) => {

    const listItems = items.map((eachObject) => (eachObject.id === id ? { ...eachObject, checked: !eachObject.checked } : eachObject));

    setItems(listItems);

    localStorage.setItem("shopplingList", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((eachObject) => eachObject.id !== id);

    setItems(listItems);
    localStorage.setItem("shopplingList", JSON.stringify(listItems));
  };

  return (
    <div className="app">
      <Header title="Grocery Lists" />
      <Content items={items} handlCheck={handlCheck} handleDelete={handleDelete} />
      <Footer length={items.length}/>

    </div>
  );
}

export default App;
