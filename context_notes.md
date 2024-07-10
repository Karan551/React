# Context API Notes

  <h2 align="center">1st Method (Basic Method) </h2>
  
### Step :-1 Create a Context Object

- First We need to create a context Object using the `createContext()` function from react library. This **context object will hold the data that you want to share across our application.**
- Create a new file named `Mycontext.js` or `context.js` in the **src folder** and add the following code to create a **context object.**

- *Path :-* **src/Mycontext.js**
- **Syntax** :- `const context = createContext(defaultValue)`

```javascript
import {createContext} from "react"
export MyContext = createContext(null)
```
- First we import `createContext` from react and using it to create a **new object named MyContext.** Then we are **exporting context object** **so that we can use it other parts of our application.**


### Step :-2 Wrap Components With a Provider

- Once we've created context object, then** we need to wrap the components that need access to the shared data with a Provider component**. The provider component accept a **value prop** that holds the **shared data** and any component that is a child of the Provider component can access that shared data.

- It's important that Provider component should be wrapped around the top level component in an application to ensure that all child components have access to the shared data.
- For example :- 
  ```javascript
  import {useState} from "react"
  import {MyContext} from "./MyContext.js"
  // Component That receive Data
  import MyComponent from "./MyComponent"

    function App(){
        // data that we pass to child component
        const [text,setText] = useState("")
      return(
        <div>
            <MyContext.Provider value={{text,setText}}>

             <!-- Child Component That will receive data -->
            <MyComponent />

            </MyContext.Provider>

        </div>
      )  

    }

    export default App;
  ```

### Step :-3 &nbsp;Consume the Context

- Now we've created the provider component we need to consume the context in other components. To do this we have to use `useContext()` hook from **react**.
- **file :-** `MyComponent.jsx`
  ```javascript
  import {useContext} from "react"
  import {MyContext} from "./MyContext.js"
  
  function MyComponent(){
    const {text,setText} = useContext(MyContext)

    return(

      <div>
      <h1>{text} </h1>
      <button onClick={()=>setText("Hello World!")}>Click Here</button>
      </div>
    )
  }
  export default MyComponent;
  ```

  ------
  <h2 align="center">2nd Method (Advance Approach) :-</h2>

#### Step :-1 &nbsp;Create Context Object


  - Inside **src folder create a folder** which name is **Context** here we will write **context object functionality**.
  - In this method we **create context object** after **we create context provider** and **create a function that return context object value**.
  - *Path:-* 👉 &nbsp;**src/Context/MyContext.js**
  ```javascript
  import { createContext, useContext } from "react";

  export const ThemeContext = createContext({
    themeMode: "light",
    darkMode: () => { },
    lightMode: () => { },
  });


  export const ThemeContextProvider = ThemeContext.Provider;


  export function themeSwitcher() {
    return useContext(ThemeContext);
  }

  ```
#### Step :-2 &nbsp;Wrap Components With a Provider 

  - Inside `App.jsx` file we will use **context provider** :-
  - *Path:-* 👉 &nbsp;**src/App.jsx**
  ```javascript
  import React from "react"

  import ChildComponent1 from "./Components/ChildComponent1"
  import ChildComponent2 from "./Components/ChildComponent2"

  export default function App(){

     const [themeMode, setThemeMode] = useState("light");

      const darkMode = () => {
        setThemeMode("dark");
      };

      const lightMode = () => {
        setThemeMode("light");
      };

    return(
      <div>

    <!-- In value attribute we pass that data that we want to send to child components. -->
    
        <ContextProvider value={{themeMode,darkMode,lightMode}}>

        <!-- Here we use that component that we want to get data. -->
        
        <ChildComponent1 />
        <ChildComponent2 />

        </ContextProvider>

      </div>
    )
  }
  ```
  - But if default value is provided via context object then we have to same name of that variable that we pass at initial state of declaration context object.
  - Here we get default value of context object is `themeMode`,`darkMode`,`lightMode` , Here `thememode` is a **variable** and `darkMode` and `lightMode` is a **function** if we want to **use that function** then we will have to create **write same function name definition so that we can use that function** and **same variable name also**.

#### Step :-3 &nbsp;Consume Context Object

  - Go to that **ChildComponent** Where you want to get data 
  - *Path:-* 👉 &nbsp;**src/Components/ChildComponent.jsx**
  ```javascript
  import { themeSwitcher } from "../Context/MyContext.js";

  function ChildComponent(){

    // this is data that we get via context object.
    // Here we get an object so we destructure that object
    const { themeMode, darkMode, lightMode } = themeSwitcher();

    return(
      <div>
      <h1>ThemeMode :- {themeMode}</h1>
      </div>
    )
  }

  ```
  
  

  