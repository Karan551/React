import GithubProfileFinder from "./Components/GithubProfileFinder";



function App() {


  return (
    <>
    <main className="min-h-screen flex items-center justify-center flex-col bg-black text-white">


      <h1 className="text-orange-500 text-3xl text-center bg-gray-300 px-3 py-5 font-semibold">Vite + React</h1>

      <GithubProfileFinder />
      </main>
    </>
  );
}

export default App;
