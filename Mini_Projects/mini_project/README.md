# React + Vite

## Important Notes For Search Auto complete Project :-

#### event.target.value :-
- `event.target.value` property is commonly used with form elements like :- `<input>`, `<textarea>` ,` <select>`
-  When user interects with these elements (e.g., typing in an **input field**, **selecting an option** in a **dropdown**, or **typing in a textarea**), **event.target.value** *refers to the current value of the element at the time the event was triggered*.
-  For example, if you have an input field `<input type="text" id="myInput"> `and the user types **Hello** into it, accessing **event.target.value** within an **event listener** for the** input element** would give you **Hello**.
  

#### event.target.innerText :-
- This property is used with elements that **contain text content**, such as `<div>`, `<span>`, `<p>`, etc.
- **It represents the visible text content within the element.**
- Unlike **event.target.value**, which is **specific to form elements** and represents **user-inputted** data, **event.target.innerText** is about the **static or dynamically generated text content within an HTML element.**
- For example, if we have a `<div id="myDiv">Hello World</div>` and the user interacts with this div (e.g., clicking on it), **event.target.innerText** would give you **Hello World**.

### Key Differences :-
 ##### Usage Context: 
 - `event.target.value` is used primarily with **form elements to capture user-inputted values**, while `event.target.innerText` is used with **other types of elements to capture their displayed text content.**
  
- **Element Types:** `event.target.value` is typically used with `<input>`, `<textarea>`, `<select>`, etc., whereas event.target.innerText is used with `<div>`, `<span>`, `<p>`, etc.
- Mutability: event.target.value can change dynamically based on user input, whereas event.target.innerText reflects the static or dynamically generated text content of an element as it appears at the time of the event.

  #### Conclusion :-
- **event.target.value** versus **event.target.innerText** depends on whether you are dealing with **form inputs** where you **need to capture user input or with other elements** where you need to access displayed text content.
