import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "../../axios";

export const feathAuth = createAsyncThunk('auth/login', async (params) => {
    const {data} = await axios.post("/auth/login", params);
    return data;
});

export const feathRegister = createAsyncThunk('auth/Register', async (params) => {
    const {data} = await axios.post("/auth/register", params);
    return data;
});

export const feathInfoMe = createAsyncThunk('auth/me', async () => {
    const {data} = await axios.get("/auth/me");
    return data;
});


const initialState = {
    item: null,
    status: 'loading',
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {
        [feathAuth.pending]: (state) => {
            state.status = "loading";
        },
        [feathAuth.fulfilled]: (state, action) => {
            state.item = action.payload;
            state.status = "loaded";
        },
        [feathAuth.rejected]: (state) => {
            state.item = null;
            state.status = "loading";
        },
        [feathInfoMe.pending]: (state) => {
            state.status = "loading";
        },
        [feathInfoMe.fulfilled]: (state, action) => {
            state.item = action.payload;
            state.status = "loaded";
        },
        [feathInfoMe.rejected]: (state) => {
            state.item = null;
            state.status = "loading";
        },
        [feathRegister.pending]: (state) => {
            state.status = "loading";
        },
        [feathRegister.fulfilled]: (state, action) => {
            state.item = action.payload;
            state.status = "loaded";
        },
        [feathRegister.rejected]: (state) => {
            state.item = null;
            state.status = "loading";
        },
    },
});

export const selectorIsAuth = state => Boolean(state.auth.item);

export const authReducer = authSlice.reducer;