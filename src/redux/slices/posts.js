import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "../../axios";

export const feathPosts = createAsyncThunk('posts/feathPosts', async () => {
    const { data } = await axios.get('/posts');
    return data;
});

const initialState = {
    posts: {
        items: [],
        status: 'loading',
    },
    tags: {
        items: [],
        status: 'loading',
    },
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
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
    },
});

export const postsReducer = postsSlice.reducer;
