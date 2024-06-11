import { useState } from "react";
import Form from "./Components/Form";
import View from "./Components/View";



function App() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  return (
    <>
      <main className="min-h-screen flex items-center flex-col bg-gray-100">
        <h1 className="text-5xl my-3 text-orange-400 font-semibold text-center">Movie Information Page :-</h1>

        <Form onSearch={handleSearch} />
        <View searchValue={searchValue} />
      </main>
    </>
  );
}

export default App;
