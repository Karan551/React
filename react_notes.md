# React Notes :-

## How can we create a basic setup for react with VITE :-

- Create a folder where you want to store your code and open terminal in that folder and type the following command:-
  ```bash
    npm create vite@latest
  ```
- After typing the following command you prompt enter the details after creating successfully project you will have to open a terminal in that folder and type the following  command :-
    ```bash
    npm run dev
    ```
-----
## What we can render in react :-
- We can render `string` ,`array` and `number` also but we cannot render `object` , `boolean` expression.

- For example :-
- **path 👉 src/App.jsx**
  ```JSX
  function App() {

  // declare string 
    const name = "Dave";

    // declare number 
    const myNumber = 45;

    // declare an array
    const myArr = ["Hello", 1, 2];

    // declare an object.
    const myObj = {
      name: "Mahesh",
      active: true,

    };
    // declare a variable
    const active =true

    return (
      <>
        <p>This is string- {name}</p>
      {/* output -> Dave  */ }
        <p>This is number- {myNumber}</p>
        {/* output -> 45  */ }


        <p>This is an array - {myArr}</p>
        {/* output -> Hello12  */ }

        <p>This is an object - {myObj}</p> 
        {/* Gives error */ }

        <p>This is boolean expression {true===false}</p>
        {/* output -> empty (no output)  */ }
      </>
    );
  }

  export default App;
  ```

- Even though we can call a **function** also and **we can render that function returns value.**
  
- For example :-
- **path 👉 src/App.jsx**
  ```JSX
  function App() {

    const nameArr = ["Master", "Ganesh", "Mahesh", "Amitesh", "Alokesh"];

    // declare a function
    const handleName = () => {
      const randomNum = Math.floor(Math.random() * nameArr.length);
      return nameArr[randomNum];
    };
    console.log("This is name:", handleName());
    return (
      <>
        {/* call a function inside curly braces */}
        <h1>Hello {handleName()}</h1>
        
      </>
    );
  }

  ```

## How can we apply css in React(JSX) :-

- We can apply **inline** `css` and **external** and **internal** `css` that we want.

  ### How can we apply Inline CSS :-

  - We can apply `css` with the following method :-
  <h4 align="center">1st Method 👇</h4>

    ```JSX
    import React from 'react';

    const Header = () => {
      return (
          <header style={ { backgroundColor: "blueviolet", fontSize: "2rem", textAlign: "center" } }>
              Groceries List
          </header>
      );
    };

    export default Header;

    ```
    <h4 align="center">2nd Method 👇</h4>

    ```JSX
    import React from 'react';

    const Header = () => {

      //Here we will write css 
      const headerStyle={ backgroundColor: "blueviolet", fontSize: "2rem", textAlign: "center" }

      return (
          <header style={headerStyle}>
              Groceries List
          </header>
      );
    };

    export default Header;

    ```
   ## How can we apply external `css` in JSX :- 
  
  - We will have to **write external css file** like `index.css` or that we want and then we will have to **import this css file in our main component or child component where we want to include (main componened (recomended)).**
  
  - **First Step :-**
  - **path** 👉 **src/index.css**
    ```css
    body{
      font-size:3rem;
      display:grid;
      place-content: center;
      min-height:100vh;
    }
    ``` 
  - **Second Step :-**
    
    ```JSX
    // Here import css file 
    import './index.css' 

    function App() {

      return (
        <main>

        <h2> Hello World</h2>
        
        </main>
      );
    }

    export default App;

    ``` 
    - We can also `import` `main.jsx` file.  
   
