import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import AddItem from "./Components/AddItem";
import { useState, useEffect } from "react";
import { data } from "./data";
import SearchItem from "./Components/SearchItem";

function App() {

  const storedData = JSON.parse(localStorage.getItem("shopplingList"));

  // const [items, setItems] = useState(storedData && storedData.length ? storedData : data);
  const [items, setItems] = useState(storedData || []);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");


  const handlCheck = (id) => {

    const listItems = items.map((eachObject) => (eachObject.id === id ? { ...eachObject, checked: !eachObject.checked } : eachObject));

    setItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((eachObject) => eachObject.id !== id);

    setItems(listItems);
  };

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;

    const myNewItem = { id, item, checked: false };
    const listItems = [...items, myNewItem];
    setItems(listItems);

  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  const handleSearch = () => {
    const result = items.filter((eachObject) => (eachObject.item.toLowerCase().includes(search.toLowerCase())));
  };


  useEffect(() => {
    localStorage.setItem("shopplingList", JSON.stringify(items));
  }, [items]);



  return (
    <div className="app">

      <Header title="Grocery Lists" />

      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />


      <Content
        items={items.filter((eachObject) => (eachObject.item.toLowerCase().includes(search.toLowerCase())))}
        handlCheck={handlCheck}
        handleDelete={handleDelete}

      />



      <Footer length={items.length} />

    </div>
  );
}

export default App;
