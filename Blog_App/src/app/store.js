import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "../features/blog/blogSlice";

// console.log("this is blog reducer::", blogReducer);
export default configureStore({
    reducer: {
        myblog: blogReducer
    }
});
// // TODO here I have to change
// export { configureStore };