import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User, UserSchema } from "../type/user";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorageKey";
const initialState: UserSchema = {};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
            localStorage.setItem(
                USER_LOCALSTORAGE_KEY,
                JSON.stringify(action.payload)
            );
        },
        initUserData: (state) => {
            if (localStorage.getItem(USER_LOCALSTORAGE_KEY)) {
                const user = JSON.parse(
                    localStorage.getItem(USER_LOCALSTORAGE_KEY) as string
                );
                state.authData = user;
            }
        },
    },
});

export const { reducer: userReducers } = userSlice;
export const { actions: userActions } = userSlice;
