import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "../../axios";

export const feathPosts = createAsyncThunk('posts/feathPosts', async () => {
    const { data } = await axios.get('/posts');
    return data;
});


export const feathTags = createAsyncThunk('posts/feathTags', async () => {
    const { data } = await axios.get('/posts/tags');
    return data;
});

// export const feathEditPost = createAsyncThunk('posts/feathEditPost', async (params) => {
//     return params;
// });


const initialState = {
    posts: {
        items: [],
        // editPost: {},
        status: 'loading',
    },
    tags: {
        items: [],
        status: 'loading',
    },
    editPost: {
        item: null ,
        status: false,
    },
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setEditPost: (state, action) =>{
            state.editPost.item = action.payload;
            // state.editPost.status = true;
        },
    },
    extraReducers: {
        [feathPosts.pending]: (state) => {
            state.posts.status = "loading";
        },
        [feathPosts.fulfilled]: (state, action) => {
            state.posts.items = action.payload;
            state.posts.status = "loaded";
        },
        [feathPosts.rejected]: (state) => {
            state.posts.items = [];
            state.posts.status = "error";
        },
        [feathTags.pending]: (state) => {
            state.tags.status = "loading";
        },
        [feathTags.fulfilled]: (state, action) => {
            state.tags.items = action.payload;
            state.tags.status = "loaded";
        },
        [feathTags.rejected]: (state) => {
            state.tags.items = [];
            state.tags.status = "error";
        },
    },
});

export const { setEditPost } = postsSlice.actions;
 
export const postsReducer = postsSlice.reducer;
