import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "../features/blog/blogSlice";

import usersReducer from "../features/users/userSlice";

export default configureStore({
    reducer: {
        blog: blogReducer,
        users: usersReducer
    }
});