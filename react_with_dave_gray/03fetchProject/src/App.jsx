import { useEffect, useState } from 'react';
import Form from './Components/Form';
import List from './Components/List';
import './styles.css';
import Tables from './Components/Tables';

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/";

  const [reqType, setReqType] = useState("users");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const cssStyles = { color: "green", minHeight: "100vh", display: "grid", placeContent: "center", fontSize: "3rem", fontFamily: "inherit" };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}${reqType}`);

        if (!response.ok)
          throw new Error("Data Cannot be fetched.");
        const data = await response.json();

        if (data) {
          console.log("this is data", data);
          setItems(data);
          setLoading(false);
        }

      } catch (error) {
        console.log("Error", error.message);
        setErrorMsg(error.message);
      }

    };

    fetchData();
  }, [reqType]);



  if (errorMsg)
    return <h2 style={{ ...cssStyles, color: "red" }}>Error : {errorMsg}</h2>;
  if (loading)
    return <h2 style={cssStyles}>Loading.....</h2>;


  return (

    <main>
      <section>
        <Form
          reqType={reqType}
          setReqType={setReqType}
        />
        {/* /<List items={items} /> */}
        <Tables items={items} />

      </section>

    </main>

  );
}

export default App;
