import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User } from "../type/user";

const initialState: User = {
    id: undefined,
    username: undefined,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
});

export const { reducer: userReducers } = userSlice;
export const { actions: userActions } = userSlice;
