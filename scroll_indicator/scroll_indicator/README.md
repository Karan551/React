# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
## Important Note Point In this Project :-

#### 1.) **document.documentElement** :-

- This is **readonly property** of the Document returns the element that is `root element` of the `document`. This will return the whole document inlcuding head and body also. 
- This returns the `<html>` element.


#### 2.)  **document.body** :-
- This returns the `<body>` element.


#### 3.) scrollHeight property :-

- `element.scrollHeight` is a readonly property is a **measurement of the height of an element's content** , **including content not visible to the screen due to overflow.**
```javascript
// To find total scrollable height
let totalScrollHeight = document.documentElement.scrollHeight
console.log(totalScrollHeight)

```

#### 4.) scrollWidth property :-

- `element.scrollWidth` readonly property is a measurement of the width of an element's content, , **including content not visible to the screen due to overflow.**.


#### 5.) scrollTop :-

- The `element.scrollTop` property **gets or sets** the **number of pixels** by which an **element's content is scrolled** from **its top edge**. 

##### `document.documentElement.scrollTop` :-
- It is used to get the **current vertical scroll position** of the document.
- We can also **set the scroll position using this propery**.<br>
  For example :-
  ```javascript
  // To set initial position of the webpage.
  document.documentElement.scrollTop=0

  // To get any position 
  document.documentElement.scrollTop

  // To  set any position 
  document.documentElement.scrollTop=1250

  ```

  #### 6.) clientHeight :- 
  - Element.clientHeight readonly property it's value 0 for with no **CSS or inline layout boxes** otherwise it's **inner height** of an element in `pixels`.
  - It includes padding but execludes **border, margin, horizontal scrollbars**  (if present).