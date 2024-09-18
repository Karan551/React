import { useState, useEffect } from 'react';
import Example1 from './Components/Example1';
import Example2 from './Components/Example2';
import { QueryClientProvider, QueryClient, useQuery } from "@tanstack/react-query";
import "./styles.css";

const queryClient = new QueryClient();

function App() {
  const [count, setCount] = useState(0);


  return (
    <>
      {/* <Example1/> */}
      <QueryClientProvider client={queryClient}>

        <Example2 />
      </QueryClientProvider>

    </>
  );
}

export default App;



function Example() {
  const [pageNumber,setPageNumber]=useState(1)
  const { isLoading, error, data } = useQuery(['posts', pageNumber], () =>
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}`).then(res =>
      res.json()
    )
  );
  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;
  console.log("This is data", data);
  return (
    <div>
      hello
      {/* <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong> */}
    </div>
  );
}