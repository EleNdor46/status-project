import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { loginSchema } from "../types/loginShema";
import { loginByUsername } from "../services/loginByUsername";
const initialState: loginSchema = {
    isLoading: false,
    password: "",
    username: "",
};

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginByUsername.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });

        builder.addCase(loginByUsername.fulfilled, (state) => {
            state.isLoading = false;
        });

        builder.addCase(loginByUsername.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const { reducer: loginReducers } = loginSlice;
export const { actions: loginActions } = loginSlice;
