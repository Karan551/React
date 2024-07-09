# Context API Notes


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