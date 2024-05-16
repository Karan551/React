import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    {
        id: 1,
        title: "Learn JavaScript",
        content: `JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, along side HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior.

        Web browsers have a dedicated JavaScript engine that executes the client code. These engines are also utilized in some servers and a variety of apps. The most popular runtime system for non-browser usage is Node.js.
       `,
        reactions: {
            thumbsup: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
        }

    },
    {
        id: 2,
        title: "Learn React",
        content: `React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.`,
        reactions: {
            thumbsup: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
        }
    },
];



export const blogSlice = createSlice(
    {
        name: "blogs",
        initialState,
        reducers: {
            addPost: (state, action) => {  
                state.push(action.payload);
            },
            addReaction: (state, action) => {
                const { postId, reaction } = action.payload;
                const existingPostObject = state.find((eachPostObject) => eachPostObject.id === postId);

                if (existingPostObject) {
                    existingPostObject.reactions[reaction]++;
                }

            }
        }
    }
);
export const { addPost, addReaction } = blogSlice.actions;


export default blogSlice.reducer;