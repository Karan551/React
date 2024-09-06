# React Router :-

### How To Create a react router :-

- If we want to use **react router in our react application** then first we will have to **install** `react-router-dom`.
- **After finishing react installation process open your terminal and type the following command :-**
  ```bash
  npm install react-router-dom
  ``` 
- **First thing we will have to create `Browser Router` and configure our first route.**
  <h2 align="center">1st Method</h2>

  ```JSX
  import React from 'react'
  import ReactDOM from 'react-dom/client'
  import App from './App.jsx'

  // import this  
  import { createBrowserRouter, RouterProvider } from "react-router-dom";

  // and add this
  const router = createBrowserRouter([
                {
                  path : "/",
                  element: <Root/>

                }
              ])

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}>
    </React.StrictMode>,
  )

  ```

### `createBrowserRouter()` :-
  - This method takes **array of Route objects**. If we want to **create nested routes** then we will have to pass `children` property. 
  
  #### Route :- 
  - **Routes are the most important part of a React Router app. They couple URL segments to components, data loading and data mutations.** 
  - Route objects have the following properties :-
      - **`path` :-** 👉 This is important and it's **mandatory** property of route objects.
          - **If we want to render to Home page then it's value is `/`.**
          - **This property shows what the value of our url (path).**
          - **The path pattern to match against the URL to determine if this route matches a URL, link href, or form action.**
           
        ##### **How To Create a Dynamic Segments Or Path :-** 
        - **If a path segment starts with `:` then it becomes a "dynamic segment"**. **When the route matches the URL, the dynamic segment will be parsed from the URL and provided as params to other router APIs.**
        - **And that element will receive that data that we pass in url , with the help of `useParams()` we can get that parameter value.**
        - **For Example :-** 👇 
        ```JSX
          <Route
            path="/teams/:teamId"
            element={<Team/>}
          />
        ``` 
        - So `<Team />` **Component Will receive the value of `teamId` params** **and we can get this value with the help of `useParams()` hook.**
        - **For Example :-** 👇
        ```JSX
        // import useParams hook
        import { useParams } from 'react-router-dom'

        export default function Team(){
          let params =useParams()
              // or We can destructure also
              // let {teamId} = useParams()

          console.log(params.teamId)
        }
        ```
        - **Dynamic segments cannot be "partial":**
          - **These are Invalid (Incorrect)**
            - 🚫 "/teams-:teamId"
            - 🚫 "/:category--:productId"
          - And Correct way is 
            -  ✅ "/teams/:teamId"
            -  ✅ "/:productSlug"


        #### How To Create Optional Segments :-

          - **We can make a route segment optional by adding a `?` to the end of the segment.**  
          - - **For Example :-** 👇
          ```JSX
          <Route
            path="/:lang?/categories"
            element={<Categories />}
          />
          ```
          - **And The `<Categories />` Component will recieve categoreies params value we can get via useParams() hook.**
          ```JSX
          export default function Categories(){
            let {lang} = useParams()
            console.log(lang)
          }
          ``` 

      - **`element` :-** 👉 **This property shows what component we want to render.** **And This is mandatory to create a route.**

      - **`loader` :-** 👉 **Each route can define a "loader" function to provide data to the route element before it renders. (This is optional property.)** 
          - We can pass also a function reference to load data that component. In That we get a parameter that name is params. 
            - `params` 👉 We get dynamic value with the help of this parameter.
              -  **For example** 👉 `params.songId`
        - **For Example :-** 👇
          ```JSX
          <Route
          // Pass function reference that we want to call 
          loader={githubInfoLoader}
          path='github' 
          element={<Github />}
          />
          ```
        - So `<Github />` component will receive data that `githubInfoLoader` function returns we can get that value with the help of `useLoaderData()` hook.
      
          ```JSX
          // import useLoaderData hook
          import { useLoaderData } from 'react-router-dom'

          export default function Github(){
            // We can get value here , with the help of useLoaderData() hook
            const data = useLoaderData()
            console.log(data)

          }

          export async function githubInfo(){
            const response = await fetch('https://api.github.com/users/hiteshchoudhary')

              // We don't need to await here this is automatically done.
              return response.json()
            }
          ```
        - [Click Here](https://reactrouter.com/en/main/route/loader#loader) To know more about `loader`.
  
      - **`errorElement` :-** 👉  **When exceptions are thrown in `loaders`, `actions`, or component rendering, instead of the normal render path for your Routes (`<Route element>`), the error path will be rendered (`<Route errorElement>`) and the error made available with `useRouteError`.**
        - **Create `<ErrorElement />` component in src directory and add the following code**
          ```JSX
          // import useRouteError hook 
          import { useRouteError } from "react-router-dom";

          export default function ErrorElement(){
              // create an object of useRouteError
              const error = useRouteError();
              console.error(error);
              return (
                  <div id="error-page">
                    <h1>Oops!</h1>
                    <p>Sorry, an unexpected error has occurred.</p>
                    <p>
                      <i>{error.statusText || error.message}</i>
                    </p>
                  </div>
                );
              }
          ```  
        - **After creating `<ErrorElement/>` component and this component in your route.**
          ```JSX
          <Route
            path="/invoices/:id"
            // if an exception is thrown here
            loader={loadInvoice}
            // here
            action={updateInvoice}
            // or here
            element={<Invoice />}
            // this will render instead of `element`
            errorElement={<ErrorElement />}
          />;

            // This component will render
            function Invoice() {
              return <div>Hello Router.</div>;
            }
          ```
        - [Click Here](https://reactrouter.com/en/main/route/error-element) To know more about `errorElement`.
    
      - **`action` :-** 👉 **Route actions are the "writes" to route loader "reads". They provide a way for apps to perform data mutations.**
        - **Actions are called whenever the app sends a non-get submission ("post", "put", "patch", "delete") to your route.** 
        - In action property we write a function in that function we get two parameters request , params. 
          - `request` 👉 With the help of this parameter we get form data value. 
            - **For example** 👉 `request.formData()`
          - `params` 👉 We get dynamic value with the help of this parameter.
            -  **For example** 👉 `params.songId`
        - [Click Here](https://reactrouter.com/en/main/route/action) To know more about `action`. 

-----

<h2 align="center">2nd Method </h2> 

### `createRoutesFromElements` :-  
- **`createRoutesFromElements` is a helper that creates route objects from `<Route>` elements. It's useful if you prefer to create your *routes as JSX* instead of objects.**
- **path `src/main.jsx` :-** 👇
  ```JSX
  import React from 'react'
  import ReactDOM from 'react-dom/client'

  import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
  } from "react-router-dom";

  // You can do this:
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="about" element={<About />} />
      </Route>
    )
  );

  // Instead of this:
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "about",
          element: <About />,
        },
      ],
    },
  ]);

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )
  ```

------
### Important Properties :-

1. **&nbsp;`<Link>` :-** A `<Link>` is an element that lets the user **navigate to another page by clicking or tapping on it.** In `react-router-dom`, a `<Link>` renders an accessible `<a>` element with a real `href` that points to the resource it's linking to.
    - **For Example :-** 👉 ` <Link to={user.id}>{user.name}</Link>`
    - [Click Here](https://reactrouter.com/en/main/components/link) To Know more about `Link`.

2. **&nbsp;`<NavLink>` :-**  **&nbsp;A `<NavLink>` is a special kind of `<Link>` that knows whether or not it is "active", "pending", or "transitioning".** <br/>
    This is useful in a few different scenarios:
    - When building a **navigation menu**, such as a breadcrumb or a set of tabs where you'd like to show which of them is **currently selected**.
    - It provides useful context for assistive technology like screen readers.
    - It provides a "transitioning" value to give you finer-grained control over View Transitions.
    
    #### Some attributes of <NavLink> :-
    - `className` :-**The `className` prop works like a normal `className`, but you can also *pass it a function* to customize the `classNames` applied based on the `active` and `pending` state of the link.**
     
        ```JSX
        <NavLink
            to="/messages"
            className={({ isActive, isPending, isTransitioning }) =>
              `${isActive ? "orange" : "grey" }`
            }
        >
            Messages
        </NavLink>
        ```

    - `style` :- 👉 **The style prop works like a normal style prop, but you can also pass it a *function* to customize the styles applied based on the *active and pending state of the link*.**
      ```JSX
      <NavLink
        to="/messages"
        style={({ isActive, isPending, isTransitioning }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "red" : "black",
            viewTransitionName: isTransitioning ? "slide" : "",
          };
        }}
      >
        Messages
      </NavLink>
      ``` 
    - [Click Here](https://reactrouter.com/en/main/components/nav-link#navlink) To Know more about `<NavLink>`.

3. **`<Navigate>`:-** 👉 A `<Navigate>` element changes the       current location when it is rendered. It accepts all the same arguments as props.<br/>
      - **For Example :-** 👉 &nbsp;`<Navigate to="/user/"> User </Navigate>`

5. **`<Outlet>` :-** 👉 **An `<Outlet>` should be used in *parent route elements to render their child route elements.* This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route.**
6. **`<Form>` :-** 👉[Click Here](https://reactrouter.com/en/main/components/form) To Know More About `<Form>`.