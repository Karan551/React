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
## ⭐ What Is React :-
- **React is a JavaScript library for rendering user interfaces (UI). UI is built from small units like buttons, text, and images. React lets you combine them into reusable, nestable components. From web sites to phone apps, everything on the screen can be broken down into components.**

## ⭐ What Is Component :-
- **React component is a JavaScript function that you can sprinkle(spray) with markup(HTML).**
- **In a React app, every piece of UI is a component.**
- **React Components are regular JavaScript Functions except :-**
  -  **Their names always begin with a capital letter or they won't work.**
  -  **They return JSX markup(HTML).**
  -  **If we not write Component names with Capital Letter react will ignore that.**

### How To Create React Components :-
- There are three steps that we follow to create react components :-
  1. **Export The Component**
  2. **Define The function**
  3. **Add Markup(HTML)**
    
    ```JSX
    export default function Greet(){
      return (
        <h1>Hello World !</h1>
      );
    }
    ```
- Components are one of the core concepts of React. They are the foundation upon which you build user interfaces (UI).
- We can use thousands of components shared by the React open source community like [Chakra UI](https://v2.chakra-ui.com/getting-started) and [Material UI](https://mui.com/material-ui/).
  > [!Note]
  > **Components can render other components, but you must never nest their definitions.**
  - **For Example :-** 👇
  ```JSX
  export default function Gallery(){

    // We should not to do this
    function Profle(){

    }
  }
  // Above Snippet is very slow and buggy.
  ```
  - **Instead of define every Component At the top level.**
  - **When a child component needs some data from a parent, pass it by `props` instead of nesting definitions.**
  ```JSX
  // First Component Definition
  export default Gallery(){
    return(
      
      /// Code Here
      
    );
  }
  // Second Component Definition
  function Profile(){
    return(
      // Write Code Here
    );
  }
 
  ``` 
-----
## ⭐ What Is JSX :-

- **JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file.**
- **React, rendering logic and markup live together in the same place—components.**
- **Each React component is a JavaScript function that may contain some markup that React renders into the browser. React components use a syntax extension called JSX to represent that markup. JSX looks a lot like HTML, but it is a bit stricter and can display dynamic information. The best way to understand this is to convert some HTML markup to JSX markup.**

### Rules Of JSX :- 👇
<h4> 1. &nbsp;Return Single Root Element:- </h4>

- **To return multiple elements from a component, wrap them with a single parent tag.**
- We can use `<div>`.
- **If you don’t want to add an extra `<div>` to your markup, you can write `<>` and `</>` instead.**
- **Fragment `<> </>` :-** 👉 **This empty tag is called a Fragment. Fragments let you group things without leaving any trace in the browser HTML tree.**
  - **Why do multiple JSX tags need to be wrapped?**
    - **JSX looks like HTML, but under the hood it is transformed into plain JavaScript objects. We can’t return two objects from a function without wrapping them into an array.** 
    - **We can’t return two JSX tags without wrapping them into another tag or a Fragment.**   

<h4> 3. &nbsp;Close all the tags:- </h4>

- **JSX requires tags to be explicitly closed: self-closing tags like `<img>` must become `<img />`** 

<h4> 2. &nbsp;camelCase Most Of The Things:- </h4>

- We can use JSX [converter](https://transform.tools/html-to-jsx).
- [Clice Here](https://react.dev/learn/writing-markup-with-jsx) To Know More About JSX.
-----
## ⭐ JavaScript In JSX With Curly Braces :-
- In `JSX` we can write `JavaScript` in **Curly Braces { }**
- `JSX` is a special way of writing `JavaScript`. That means it’s possible to use `JavaScript` inside it—with **curly braces { }.**

- **We can pass `strings`, `numbers`, and *other JavaScript expressions*, we can even pass `objects` in `JSX`.**

### Where we should use curly braces :-
- **We can only use curly braces in two ways inside JSX:**

1. **As text directly inside a JSX tag:** 👉 &nbsp; **`<h1>Hello {name}</h1>` works ; Here name is variable ,but `<{tag}>Hello Master</{tag}>` will not.**
2. **As attributes immediately following the = sign:** 👉&nbsp; **`src={avatar}` will read the avatar variable, but `src="{avatar}"` will pass the string `"{avatar}"`.**

### Using “double curlies”: CSS and other objects in JSX :-

- **We can pass `strings`, `numbers`, and *other JavaScript expressions*, we can even pass `objects` in `JSX`.**
- **Objects are also denoted with curly braces, like `{ name: "Hedy Lamarr", inventions: 5 }`. Therefore, to pass a JS object in `JSX`;** <br/> **We must wrap the `object` in *another pair of curly braces* : `person = {{ name: "Hedy Lamarr", inventions: 5 }}`.**
- We can see this with inline CSS styles in JSX. React does not require you to use inline styles (CSS classes work great for most cases). But when we need an inline style, we pass an object to the style attribute:
- **For Example:-** 👇
  ```JSX
  <h1 style={{
      backgroundColor: 'black',
      color: 'white'}}>
    Hello World 
  </h1>
  ``` 
-----
## ⭐ Passing Props to a Component :-

- **React components use `props` to communicate with each other. Every parent component can pass some information to its child components by giving them `props`. Props might remind you of HTML attributes, <br/>  *We can pass any JavaScript value* like :- `string` , `number`, `objects`, `arrays`, and `functions(function reference)`.**
- **Props are the information that you pass to a JSX tag.**<br/> **For example :-** 👉 `className`, `src`, `alt`, `width`, and `height` are some of the `props` we can pass to an `<img>`.
- There are two steps to use props in components :-

  ### 🌟 Step:-1 Pass props to the child component :-
  - First Pass some props to child component
  - **For Example :-** 👇
    ```JSX
    export default function Profile() {
    return (

      {/* child component  */}
      <Avatar
        {/* pass an object, person(props)  */}
        person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}

        {/*  passing a number size(props)  */}
        size={100}
      />
      );
    }
    ``` 
  - Now we can read these `props` inside the **Avatar** component.

 
  ### 🌟 Step:-2 Read props inside the child component :-

  - **We can read these `props` by listing their names `person`, `size` separated by the commas inside curly braces ({ and }) directly after function Avatar. This lets you use them inside the Avatar code, like you would with a variable.**
  - **For Example :-** 👇
    ```JSX
    function Avatar({ person, size }) {
    // person and size are available here
    }
    ```
  - We can think of props like “knobs” that we can adjust. They serve the same role as arguments serve for `functions` Infact, `props` are the only argument to our component! **React component functions accept a single argument, a props object.**
  ##### 🌟 **Default Value For a prop :-**

  - **If We want to give a prop a default value to fall back on when no value is specified, we can do it with the destructuring by putting `=` and the default value right after the parameter.**
  - **For Example:-** 👇
    ```JSX
    function Avatar({ person, size = 100 }) {
    // ...
    }
    ``` 
  - **The default value is only used if the `size` `prop` is missing or if we pass `size={undefined}`. But if we pass `size={null}` or `size={0}`, then *default value will not be used*.**
  - [Click Here](https://react.dev/learn/passing-props-to-a-component) **to know more about props.**
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
  
-----
## What is HTTP Protocol ?
- HTTP is a protocol, or a definite set of rules, for accessing resources on the web. Resources could mean anything from HTML files to data from a database, photos, text, and so on.

- These resources are made available to us via an API and we make requests to these APIs via the HTTP protocol. API stands for application programming interface. It is the mechanism that allows developers to request resources.

### Some Important `Request` Methods Are :-

1. **`GET` :-** 👉 **By default Http request is `GET` if we are not define explicitly.This method is used only for read data.**

2. **`POST` :-** 👉 **`POST` method is used to add new data. Every time when we want to use this method we will have to define explicitly.**
   
3. **`PUT` :-** 👉 **`PUT` method is used to modify a resource. This method updates the entire resource with data that is passed in the body payload. If there is no resource that matches the request, it will create a new resource.**
   
4. **`PATCH` :-** 👉 **`PATCH` method applies partial modification to a resource. We use `PATCH` request to modify a part of a resource. With `PATCH`, we will have to pass data that we want to update.**
   
5. **`DELETE` :-** 👉  **`DELETE` method deletes the specified resource.**


#### ⭐&nbsp; What is difference between `PUT` request and `POST` request :-
- **`PUT` requests are idempotent(means same result if we do same work many times), meaning that executing the same `PUT` request will always produce the same result.**

- **On the other hand, a `POST` will produce different outcomes. If you execute a POST request multiple times, you'll create a new resource multiple times despite them having the same data being passed in.**

- **Using a restaurant analogy, `POST`ing multiple times would create multiple separate orders, whereas multiple `PUT` requests will update the same existing order.**

#### ⭐&nbsp; What is difference between `PUT` request and `PATCH` request :-
- **The key differences are that `PUT` will create a *new resource if it cannot find* the specified resource. And with `PUT` you need to pass in data to update the entire resource, even if you only want to modify one field.**

- **With `PATCH`, you can update part of a resource by simply passing in the data of the field to be updated.**

- **C (CREATE)** 👉 `POST` request.
- **R (READ)** 👉 `GET` request.
- **U (UPDATE)** 👉 `PATCH` request. (But if we want to update entire resource then `PUT` request). 
- **D (DELETE)** 👉 `DELETE` request.

#### How To Start JSON Server :-

```bash 
npx json-server --watch db.json.
# or 
# Syntax ==> npx json-server path_json_file
npx json-server db.json
```