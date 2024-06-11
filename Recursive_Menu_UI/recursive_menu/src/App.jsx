// import { useState } from 'react'

import TreeView from "./Recursive_UI/TreeView";

// import './App.css'
import menus from "./Recursive_UI/data";
function App() {

  // console.log("This is menu in App file.", menus);
  return (
    <>

      <h1>Recursive UI Menu Tree</h1>

      {/* Tree view component/menu UI component / recursive navigation menu */}
      {/* <TreeView menus={menus} /> */}


      <TreeView menus={menus} />
    </>
  );
}

export default App;
